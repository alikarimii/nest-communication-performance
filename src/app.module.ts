// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BenchmarkModule } from './benchmark/benchmark.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BenchmarkModule, UserModule],
  controllers: [AppController],
})
export class AppModule {}
