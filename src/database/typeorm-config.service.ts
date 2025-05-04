import { Service } from 'src/services/entities/services.entity';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';
import { ServiceItemType } from 'src/services_item_type/entities/services_item_type';
import { ServiceOptionItemAmountPrice } from 'src/services_option_item_amount_price/entities/services_option_item_amount_price';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ClientRequest } from 'src/client-requests/entities/client-requests.entity';

@Injectable()
export class TypeOrmConfigService {
  constructor(private configService: ConfigService) { }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'new_password',
      database: 'cleaning',
      entities: [Service, ServiceOption, ServiceItemType, ServiceOptionItemAmountPrice, ClientRequest],
      synchronize: true,
    };
  }
}
