// src/user/user.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getUser(userId: string) {
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 50));
    return { id: userId, name: 'John Doe' };
  }
}
