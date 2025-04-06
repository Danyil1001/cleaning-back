import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceOptionItemAmountPrice } from 'src/services_option_item_amount_price/entities/services_option_item_amount_price';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';
import { ServiceItemType } from 'src/services_item_type/entities/services_item_type';
import { ServicesItemTypeEnum } from 'src/services_item_type/enum/services_item_type.enum';
import { ServicesOptionsEnum } from 'src/services_options/enum/services_options.enum';

@Injectable()
export class ServiceOptionItemAmountPriceSeedService {
  constructor(
    @InjectRepository(ServiceOptionItemAmountPrice)
    private readonly serviceOptionItemAmountPriceRepository: Repository<ServiceOptionItemAmountPrice>,

    @InjectRepository(ServiceOption)
    private readonly serviceOptionRepository: Repository<ServiceOption>,

    @InjectRepository(ServiceItemType)
    private readonly serviceItemTypeRepository: Repository<ServiceItemType>,
  ) { }

  async run() {
    const serviceOptionItemAmountPrices = [
      { serviceOptionType: 'CLEANING_AFTER_REPAIR', serviceItemType: 'NORMAL_ROOM', amount: 1, price: 100 },
      { serviceOptionType: 'CLEANING_BEFORE_MOVE', serviceItemType: 'NORMAL_ROOM', amount: 1, price: 200 },
      { serviceOptionType: 'CLEANING_GENEARL', serviceItemType: 'NORMAL_ROOM', amount: 1, price: 300 },
      { serviceOptionType: 'MOVING', serviceItemType: 'NORMAL_ROOM', amount: 1, price: 400 },
    ];

    for (const entry of serviceOptionItemAmountPrices) {

      const serviceOption = await this.serviceOptionRepository.findOne({
        where: { type: ServicesOptionsEnum[entry.serviceOptionType] },
      });

      const serviceItemType = await this.serviceItemTypeRepository.findOne({
        where: { type: ServicesItemTypeEnum[entry.serviceItemType] },
      });

      console.log(serviceOption)


      if (!serviceOption) {
        continue;
      }

      if (!serviceItemType) {
        continue;
      }

      const existingEntry = await this.serviceOptionItemAmountPriceRepository.findOne({
        where: { serviceOption: { id: serviceOption.id }, serviceItemType: { id: serviceItemType.id } },
      });

      if (!existingEntry) {
        const serviceOptionItemAmountPrice = this.serviceOptionItemAmountPriceRepository.create({
          serviceOption,
          serviceItemType,
          amount: entry.amount,
          price: entry.price,
        });

        await this.serviceOptionItemAmountPriceRepository.save(serviceOptionItemAmountPrice);
      }
    }
  }
}
