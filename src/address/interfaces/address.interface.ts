import { Address } from '../entities/address.entity';
import { AddressResponse } from '../../common/address-provider/address-provider.interface';

export interface AddressService {
  getAddressByCPF(cpf: string): Promise<Address>;
  getFurtherInfoAddressByCEP(cep): Promise<AddressResponse>;
}
