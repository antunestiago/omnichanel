import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from '../../account/entities/account.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, (account) => account.cpf)
  account: Account;

  @Column()
  cep: string;

  @Column()
  address: string;

  @Column()
  address1: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;
}
