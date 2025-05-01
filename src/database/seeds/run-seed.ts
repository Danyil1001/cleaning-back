import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { ServicesSeedService } from './services/services-seed.service';
import { ServicesOptionsSeedService } from './services_options/services_options.service';
import { ServiceItemTypeSeedService } from './service_item_type/service_item_type-seed.service';
import { ServiceOptionItemAmountPriceSeedService } from './services_options_item_amount.ts/services_options_item_amount-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);
  await app.get(ServicesSeedService).run();
  await app.get(ServicesOptionsSeedService).run();
  await app.get(ServiceItemTypeSeedService).run();
  await app.get(ServiceOptionItemAmountPriceSeedService).run();
  await app.close();
};

runSeed();
