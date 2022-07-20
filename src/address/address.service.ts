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

  getAddressByCPF(cpf: string): Promise<Address> {
    return this.addressDAO.getByCPF(cpf);
  }

  async getFurtherInfoAddressByCEP(cep: string): Promise<AddressResponse> {
    return this.addressProvider.getAddressByCEP(cep);
  }
}
