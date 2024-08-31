import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class PostService {
  constructor(private readonly userService: UserService) {}

  async createPost(userId: string, content: string) {
    const user = await this.userService.getUser(userId);
    return {
      user,
      content,
      timestamp: new Date(),
    };
  }
}
