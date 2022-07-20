import { Address } from '../entities/address.entity';

export interface AddressDao {
  save(address: Address): Promise<Address>;
  getByCPF(cpf: string): Promise<Address>;
}
