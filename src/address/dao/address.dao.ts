import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressDao } from '../interfaces/address-dao.interface';
import { Address } from '../entities/address.entity';

export class AddressDaoImpl implements AddressDao {
  constructor(
    @InjectRepository(Address) private readonly repository: Repository<Address>,
  ) {}

  async save(address: Address): Promise<Address> {
    return await this.repository.save(address);
  }

  async getByCPF(cpf: string): Promise<Address> {
    // return await this.repository.findOneBy({ account: cpf });
    return {} as any;
  }
}
