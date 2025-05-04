import { DataSource } from 'typeorm';
import { Service } from 'src/services/entities/services.entity';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';
import { ServiceOptionItemAmountPrice } from 'src/services_option_item_amount_price/entities/services_option_item_amount_price';
import { ServiceItemType } from 'src/services_item_type/entities/services_item_type';
import { ClientRequest } from 'src/client-requests/entities/client-requests.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'new_password',
  database: 'cleaning',
  synchronize: false,
  logging: true,
  entities: [
    Service,
    ServiceOption,
    ServiceOptionItemAmountPrice,
    ServiceItemType,
    ClientRequest
  ],
  migrations: ['src/database/migrations/*.ts'],
  subscribers: [],
});
