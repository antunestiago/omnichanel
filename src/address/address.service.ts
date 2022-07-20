import { Inject, Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressService } from './interfaces/address.interface';
import { Address } from './entities/address.entity';
import { DITokensEnum } from '../common/enums/DITokens.enum';
import { AddressDao } from './interfaces/address-dao.interface';
import { Account } from '../account/entities/account.entity';
import {
  AddressProvider,
  AddressResponse,
} from '../common/address-provider/address-provider.interface';

@Injectable()
export class AddressServiceImpl implements AddressService {
  constructor(
    @Inject(DITokensEnum.addressDAO) private addressDAO: AddressDao,
    @Inject(DITokensEnum.addressProvider)
    private addressProvider: AddressProvider,
  ) {}

  async createAddress(createAddressDTO: CreateAddressDto): Promise<Address> {
    const address = this.parseCreateAddressDtoToAddress(createAddressDTO);

    return await this.addressDAO.save(address);
  }

  private parseCreateAddressDtoToAddress(createAddressDTO: CreateAddressDto) {
    const account = new Account();
    account.id = createAddressDTO.accountId;

    const address: Address = new Address();
    address.account = account;
    address.address = createAddressDTO.address;
    address.address1 = createAddressDTO.address1;
    address.cep = createAddressDTO.cep;
    address.city = createAddressDTO.city;
    address.neighborhood = createAddressDTO.neighborhood;
    address.state = createAddressDTO.state;
    return address;
  }

  getAddressByCPF(cpf: string): Promise<Address> {
    return Promise.resolve(undefined);
  }

  async getFurtherInfoAddressByCEP(cep: string): Promise<AddressResponse> {
    return this.addressProvider.getAddressByCEP(cep);
  }
}
