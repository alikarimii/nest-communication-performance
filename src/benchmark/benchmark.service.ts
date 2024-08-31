import { Injectable } from '@nestjs/common';
import { PostNatsService } from '../post-nats/post.nats.service';
import { PostService } from '../post/post.service';

@Injectable()
export class BenchmarkService {
  constructor(
    private readonly postService: PostService,
    private readonly postNatsService: PostNatsService,
  ) {}

  async measureDirectInjection(
    userId: string,
    content: string,
    iterations: number,
  ) {
    const start = Date.now();

    for (let i = 0; i < iterations; i++) {
      await this.postService.createPost(userId, content);
    }

    const end = Date.now();
    return end - start;
  }

  async measureNatsMessaging(
    userId: string,
    content: string,
    iterations: number,
  ) {
    const start = Date.now();

    for (let i = 0; i < iterations; i++) {
      await this.postNatsService.createPost(userId, content);
    }

    const end = Date.now();
    return end - start;
  }
}
