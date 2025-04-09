import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceItemType } from 'src/services_item_type/entities/services_item_type';
import { ServicesItemTypeEnum } from 'src/services_item_type/enum/services_item_type.enum';

@Injectable()
export class ServiceItemTypeSeedService {
  constructor(
    @InjectRepository(ServiceItemType)
    private readonly serviceItemTypeRepository: Repository<ServiceItemType>,
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
