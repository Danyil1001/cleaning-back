import { Module } from '@nestjs/common';
import { ServicesOptionsService } from './services_options.service';
import { ServicesOptionsController } from './services_options.controller';

@Module({
  providers: [ServicesOptionsService],
  controllers: [ServicesOptionsController]
})
export class ServicesOptionsModule {}
