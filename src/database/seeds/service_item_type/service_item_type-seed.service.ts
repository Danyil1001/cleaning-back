import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceItemType } from 'src/services_item_type/entities/services_item_type';
import { ServicesItemTypeEnum } from 'src/services_item_type/enum/services_item_type.enum';
import { ServiceOptionItemAmountPrice } from 'src/services_option_item_amount_price/entities/services_option_item_amount_price';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';
import { ServicesOptionsEnum } from 'src/services_options/enum/services_options.enum';

@Injectable()
export class ServiceItemTypeSeedService {
  constructor(
    @InjectRepository(ServiceItemType)
    private readonly serviceItemTypeRepository: Repository<ServiceItemType>,

    @InjectRepository(ServiceOptionItemAmountPrice)
    private readonly serviceOptionItemAmountPriceRepository: Repository<ServiceOptionItemAmountPrice>,

    @InjectRepository(ServiceOption)
    private readonly serviceOptionRepository: Repository<ServiceOption>,
  ) { }

  async run() {
    const serviceItemTypes = [
      { type: ServicesItemTypeEnum.BATHROOM },
      { type: ServicesItemTypeEnum.NORMAL_ROOM },
      { type: ServicesItemTypeEnum.STORE_ROOM },
    ];

    for (const itemType of serviceItemTypes) {
      const existingItemType = await this.serviceItemTypeRepository.findOne({
        where: { type: itemType.type },
      });
      let serviceItemType: any = null

      if (!existingItemType) {
        serviceItemType = this.serviceItemTypeRepository.create(itemType);
        await this.serviceItemTypeRepository.save(serviceItemType);
      } 
    }
  }
}
