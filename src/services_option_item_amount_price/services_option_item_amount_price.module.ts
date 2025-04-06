import { Module } from '@nestjs/common';
import { ServicesOptionItemPriceController } from './services_option_item_amount_price.controller';
import { ServicesOptionItemPriceService } from './services_option_item_amount_price.service';

@Module({
  controllers: [ServicesOptionItemPriceController],
  providers: [ServicesOptionItemPriceService]
})
export class ServicesOptionItemAmountPriceModule {}
