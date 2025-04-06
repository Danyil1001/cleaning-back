import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { ServicesSeedService } from './services/services-seed.service';
import { ServicesOptionsSeedService } from './services_options/services_options.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);
  await app.get(ServicesSeedService).run();
  await app.get(ServicesOptionsSeedService).run();

  await app.close();
};

runSeed();
