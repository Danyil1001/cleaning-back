import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ServicesEnum } from '../enum/services.enum';
import { ServiceOption } from 'src/services_options/entities/services_options.entity';


@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ServicesEnum,
  })
  type: ServicesEnum;

  @OneToMany(() => ServiceOption, option => option.service)
  options: ServiceOption[];
}
