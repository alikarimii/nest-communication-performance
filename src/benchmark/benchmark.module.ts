import { Module } from '@nestjs/common';
import { PostNatsModule } from '../post-nats/post.nats.module';
import { PostModule } from '../post/post.module';
import { BenchmarkService } from './benchmark.service';

@Module({
  imports: [PostModule, PostNatsModule],
  providers: [BenchmarkService],
  exports: [BenchmarkService],
})
export class BenchmarkModule {}
