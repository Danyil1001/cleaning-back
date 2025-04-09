import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ServicesModule } from './services/services.module';
import { ServicesOptionsModule } from './services_options/services_options.module';
import { ServicesOptionItemAmountPriceModule } from './services_option_item_amount_price/services_option_item_amount_price.module';
import { ServicesItemTypeModule } from './services_item_type/services_item_type.module';
import { AppDataSource } from './database/data-source';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { DataSource, DataSourceOptions } from 'typeorm';

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
    ServicesModule,
    ServicesOptionsModule,
    ServicesOptionItemAmountPriceModule,
    ServicesItemTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
