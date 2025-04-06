import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceItemType } from 'src/services_item_type/entities/services_item_type';
import { ServiceOptionItemAmountPrice } from 'src/services_option_item_amount_price/entities/services_option_item_amount_price';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';
import { ServiceOptionItemAmountPriceSeedService } from './services_options_item_amount-seed.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ServiceOptionItemAmountPrice, ServiceOption, ServiceItemType]),
  ],
  providers: [ServiceOptionItemAmountPriceSeedService],
  exports: [ServiceOptionItemAmountPriceSeedService],
})
export class ServiceOptionItemAmountPriceSeedModule { }
