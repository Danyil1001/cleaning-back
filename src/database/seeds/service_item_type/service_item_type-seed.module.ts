import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceItemTypeSeedService } from './service_item_type-seed.service';
import { ServiceItemType } from 'src/services_item_type/entities/services_item_type';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';
import { ServiceOptionItemAmountPrice } from 'src/services_option_item_amount_price/entities/services_option_item_amount_price';

@Module({
  imports: [
    TypeOrmModule.forFeature([ServiceItemType,
      ServiceOptionItemAmountPrice,
      ServiceOption]),
  ],
  providers: [ServiceItemTypeSeedService],
})
export class ServicesItemSeedModule {}
