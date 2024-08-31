import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PostNatsService {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  async createPost(userId: string, content: string) {
    const user = await firstValueFrom(
      this.client.send({ cmd: 'get_user' }, userId),
    );
    return {
      user,
      content,
      timestamp: new Date(),
    };
  }
}
