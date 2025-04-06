import { DataSource } from 'typeorm';
import { Service } from 'src/services/entities/services.entity';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';
import { ServiceOptionItemAmountPrice } from 'src/services_option_item_amount_price/entities/services_option_item_amount_price';
import { ServiceItemType } from 'src/services_item_type/entities/services_item_type';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DATABASE_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [
    Service,
    ServiceOption,
    ServiceOptionItemAmountPrice,
    ServiceItemType,
  ],
  migrations: ['src/database/migrations/*.ts'],
  subscribers: [],
});
