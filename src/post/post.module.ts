import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { PostService } from './post.service';

@Module({
  imports: [UserModule],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
