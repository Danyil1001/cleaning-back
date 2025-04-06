import { Service } from 'src/services/entities/services.entity';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';
import { ServiceItemType } from 'src/services_item_type/entities/services_item_type';
import { ServiceOptionItemAmountPrice } from 'src/services_option_item_amount_price/entities/services_option_item_amount_price';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres', // Example for PostgreSQL
      host: this.configService.get('DB_HOST'),
      port: this.configService.get('DB_PORT'),
      username: this.configService.get('DB_USERNAME'),
      password: this.configService.get('DB_PASSWORD'),
      database: this.configService.get('DB_NAME'),
      entities: [Service, ServiceOption, ServiceItemType, ServiceOptionItemAmountPrice], // Explicitly adding entities here
      synchronize: true, // Set to false in production to avoid auto migrations
    };
  }
}
