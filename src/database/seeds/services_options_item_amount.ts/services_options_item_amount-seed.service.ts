import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceOptionItemAmountPrice } from 'src/services_option_item_amount_price/entities/services_option_item_amount_price';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';
import { ServiceItemType } from 'src/services_item_type/entities/services_item_type';
import { ServicesItemTypeEnum } from 'src/services_item_type/enum/services_item_type.enum';
import { ServicesOptionsEnum } from 'src/services_options/enum/services_options.enum';

const CLEANING_AFTER_REPAIR = 'CLEANING_AFTER_REPAIR'
const CLEANING_BEFORE_MOVE = 'CLEANING_BEFORE_MOVE'
const CLEANING_GENEARL = 'CLEANING_GENEARL'
const MOVING = 'MOVING'
const CLEANING_MOVING = 'CLEANING_MOVING'



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
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 1, price: 100 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 1.5, price: 200 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 2, price: 300 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 2.5, price: 400 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 3, price: 500 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 3.5, price: 600 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 4, price: 700 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 4.5, price: 700 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 5, price: 900 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 5.5, price: 1000 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 6, price: 1100 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 6.5, price: 1200 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 7, price: 1300 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 7.5, price: 1400 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 8, price: 1500 },

      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 1, price: 200 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 1.5, price: 300 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 2, price: 400 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 2.5, price: 500 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 3, price: 600 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 3.5, price: 700 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 4, price: 800 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 4.5, price: 900 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 5, price: 1000 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 5.5, price: 1100 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 6, price: 1200 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 6.5, price: 1300 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 7, price: 1400 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 7.5, price: 1500 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 8, price: 1600 },

      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 1, price: 300 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 1.5, price: 400 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 2, price: 500 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 2.5, price: 600 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 3, price: 700 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 3.5, price: 800 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 4, price: 900 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 4.5, price: 1000 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 5, price: 1000 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 5.5, price: 1200 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 6, price: 1300 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 6.5, price: 300 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 7, price: 1400 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 7.5, price: 1500 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 8, price: 1600 },


      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 1, price: 100 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 1.5, price: 200 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 2, price: 300 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 2.5, price: 400 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 3, price: 500 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 3.5, price: 600 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 4, price: 700 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 4.5, price: 700 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 5, price: 900 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 5.5, price: 1000 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 6, price: 1100 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 6.5, price: 1200 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 7, price: 1300 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 7.5, price: 1400 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'BATHROOM', time: 60, amount: 8, price: 1500 },

      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 1, price: 200 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 1.5, price: 300 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 2, price: 400 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 2.5, price: 500 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 3, price: 600 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 3.5, price: 700 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 4, price: 800 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 4.5, price: 900 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 5, price: 1000 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 5.5, price: 1100 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 6, price: 1200 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 6.5, price: 1300 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 7, price: 1400 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 7.5, price: 1500 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'BATHROOM', time: 60, amount: 8, price: 1600 },

      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 1, price: 300 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 1.5, price: 400 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 2, price: 500 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 2.5, price: 600 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 3, price: 700 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 3.5, price: 800 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 4, price: 900 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 4.5, price: 1000 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 5, price: 1000 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 5.5, price: 1200 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 6, price: 1300 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 6.5, price: 300 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 7, price: 1400 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 7.5, price: 1500 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'BATHROOM', time: 60, amount: 8, price: 1600 },


      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 1, price: 100 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 1.5, price: 200 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 2, price: 300 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 2.5, price: 400 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 3, price: 500 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 3.5, price: 600 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 4, price: 700 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 4.5, price: 700 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 5, price: 900 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 5.5, price: 1000 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 6, price: 1100 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 6.5, price: 1200 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 7, price: 1300 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 7.5, price: 1400 },
      { serviceOptionType: CLEANING_AFTER_REPAIR, serviceItemType: 'STORE_ROOM', time: 60, amount: 8, price: 1500 },

      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 1, price: 200 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 1.5, price: 300 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 2, price: 400 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 2.5, price: 500 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 3, price: 600 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 3.5, price: 700 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 4, price: 800 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 4.5, price: 900 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 5, price: 1000 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 5.5, price: 1100 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 6, price: 1200 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 6.5, price: 1300 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 7, price: 1400 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 7.5, price: 1500 },
      { serviceOptionType: CLEANING_BEFORE_MOVE, serviceItemType: 'STORE_ROOM', time: 60, amount: 8, price: 1600 },

      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 1, price: 300 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 1.5, price: 400 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 2, price: 500 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 2.5, price: 600 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 3, price: 700 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 3.5, price: 800 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 4, price: 900 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 4.5, price: 1000 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 5, price: 1000 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 5.5, price: 1200 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 6, price: 1300 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 6.5, price: 300 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 7, price: 1400 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 7.5, price: 1500 },
      { serviceOptionType: CLEANING_GENEARL, serviceItemType: 'STORE_ROOM', time: 60, amount: 8, price: 1600 },

      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 1, price: 400 },
      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 1.5, price: 500 },
      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 2, price: 600 },
      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 2.5, price: 700 },
      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 3, price: 800 },
      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 3.5, price: 900 },
      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 4, price: 1000 },
      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 4.5, price: 1100 },
      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 5, price: 1200 },
      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 5.5, price: 1300 },
      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 6, price: 1400 },
      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 6.5, price: 1500 },
      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 7, price: 1600 },
      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 7.5, price: 1700 },
      { serviceOptionType: MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 8, price: 1800 },


      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 1, price: 400 },
      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 1.5, price: 500 },
      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 2, price: 600 },
      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 2.5, price: 700 },
      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 3, price: 800 },
      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 3.5, price: 900 },
      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 4, price: 1000 },
      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 4.5, price: 1100 },
      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 5, price: 1200 },
      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 5.5, price: 1300 },
      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 6, price: 1400 },
      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 6.5, price: 1500 },
      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 7, price: 1600 },
      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 7.5, price: 1700 },
      { serviceOptionType: MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 8, price: 1800 },


      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 1, price: 400 },
      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 1.5, price: 500 },
      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 2, price: 600 },
      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 2.5, price: 700 },
      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 3, price: 800 },
      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 3.5, price: 900 },
      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 4, price: 1000 },
      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 4.5, price: 1100 },
      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 5, price: 1200 },
      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 5.5, price: 1300 },
      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 6, price: 1400 },
      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 6.5, price: 1500 },
      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 7, price: 1600 },
      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 7.5, price: 1700 },
      { serviceOptionType: MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 8, price: 1800 },

      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 1, price: 400 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 1.5, price: 500 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 2, price: 600 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 2.5, price: 700 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 3, price: 800 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 3.5, price: 900 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 4, price: 1000 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 4.5, price: 1100 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 5, price: 1200 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 5.5, price: 1300 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 6, price: 1400 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 6.5, price: 1500 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 7, price: 1600 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 7.5, price: 1700 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'NORMAL_ROOM', time: 60, amount: 8, price: 1800 },


      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 1, price: 400 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 1.5, price: 500 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 2, price: 600 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 2.5, price: 700 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 3, price: 800 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 3.5, price: 900 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 4, price: 1000 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 4.5, price: 1100 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 5, price: 1200 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 5.5, price: 1300 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 6, price: 1400 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 6.5, price: 1500 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 7, price: 1600 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 7.5, price: 1700 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'BATHROOM', time: 60, amount: 8, price: 1800 },

      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 1, price: 400 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 1.5, price: 500 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 2, price: 600 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 2.5, price: 700 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 3, price: 800 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 3.5, price: 900 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 4, price: 1000 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 4.5, price: 1100 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 5, price: 1200 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 5.5, price: 1300 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 6, price: 1400 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 6.5, price: 1500 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 7, price: 1600 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 7.5, price: 1700 },
      { serviceOptionType: CLEANING_MOVING, serviceItemType: 'STORE_ROOM', time: 60, amount: 8, price: 1800 },
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


      const serviceOptionItemAmountPrice = this.serviceOptionItemAmountPriceRepository.create({
        serviceOption,
        serviceItemType,
        time: entry.time,
        amount: entry.amount,
        price: entry.price,
      });

      await this.serviceOptionItemAmountPriceRepository.save(serviceOptionItemAmountPrice);
    }

  }
}
