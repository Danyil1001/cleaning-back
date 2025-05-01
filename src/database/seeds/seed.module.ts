import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesSeedModule } from './services/services-seed.module';
import { ServicesOptionsSeedModule } from './services_options/services_options.module';
import { TypeOrmConfigService } from '../typeorm-config.service';
import { DataSource, DataSourceOptions } from 'typeorm';
import { ServiceOptionItemAmountPriceSeedModule } from './services_options_item_amount.ts/services_options_item_amount-seed.module';
import { ServicesItemSeedModule } from './service_item_type/service_item_type-seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options: DataSourceOptions) => {
        return new DataSource(options).initialize();
      },
    }),
    ServicesSeedModule,
    ServicesOptionsSeedModule,
    ServiceOptionItemAmountPriceSeedModule,
    ServicesItemSeedModule
  ],
})
export class SeedModule { }
