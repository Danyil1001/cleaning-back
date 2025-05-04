import { DataSourceOptions } from 'typeorm';
import { Service } from './src/services/entities/services.entity';
import { ServiceOption } from './src/services_options/entities/services_options.entity';
import { ServiceOptionItemAmountPrice } from './src/services_option_item_amount_price/entities/services_option_item_amount_price';
import { ServiceItemType } from './src/services_item_type/entities/services_item_type';
import { ClientRequest } from 'src/client-requests/entities/client-requests.entity';

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DATABASE_PORT || '5432', 10) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    Service,
    ServiceOption,
    ServiceOptionItemAmountPrice,
    ServiceItemType,
    ClientRequest
  ],
  migrations: ['src/database/migrations/*.ts'],  // Path to migrations
  synchronize: false, // Set to false to avoid auto-sync in production
};

export = config;
