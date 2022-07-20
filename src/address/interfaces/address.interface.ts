import { CreateAddressDto } from '../dto/create-address.dto';
import { Address } from '../entities/address.entity';
import { AddressResponse } from '../../common/address-provider/address-provider.interface';

export interface AddressService {
  createAddress(createAddressDTO: CreateAddressDto): Promise<Address>;
  getAddressByCPF(cpf: string): Promise<Address>;
  getFurtherInfoAddressByCEP(cep): Promise<AddressResponse>;
}
