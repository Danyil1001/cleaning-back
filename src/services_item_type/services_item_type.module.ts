import { Module } from '@nestjs/common';
import { ServicesItemTypeService } from './services_item_type.service';
import { ServicesItemTypeController } from './services_item_type.controller';

@Module({
  providers: [ServicesItemTypeService],
  controllers: [ServicesItemTypeController]
})
export class ServicesItemTypeModule {}
