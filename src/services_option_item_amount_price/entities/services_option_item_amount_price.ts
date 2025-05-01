import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';
import { ServiceItemType } from 'src/services_item_type/entities/services_item_type';

@Entity()
export class ServiceOptionItemAmountPrice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ServiceOption)
  serviceOption: ServiceOption;

  @ManyToOne(() => ServiceItemType)
  serviceItemType: ServiceItemType;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column()
  time: number;

  @Column()
  price: number;
}
