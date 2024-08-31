// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { BenchmarkService } from './benchmark/benchmark.service';

@Controller()
export class AppController {
  constructor(private readonly benchmarkService: BenchmarkService) {}

  @Get('benchmark')
  async runBenchmark() {
    const userId = '123';
    const content = 'This is a test post';
    const iterations = 1000;

    const [directTime, natsTime] = await Promise.all([
      this.benchmarkService.measureDirectInjection(userId, content, iterations),
      this.benchmarkService.measureNatsMessaging(userId, content, iterations),
    ]);

    return {
      directInjection: `${directTime} ms for ${iterations} iterations`,
      natsMessaging: `${natsTime} ms for ${iterations} iterations`,
    };
  }
  @Get('/')
  async getHello() {
    return 'Hello World!';
  }
}
