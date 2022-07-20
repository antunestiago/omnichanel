import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateAccountDto } from '../dto/create-account.dto';
import { UpdateAccountDto } from '../dto/update-account.dto';
import { AccountService } from '../interfaces/account.interface';
import { Account } from '../entities/account.entity';
import { AccountDao } from '../interfaces/account-dao.interface';
import { DITokensEnum } from '../../common/enums/DITokens.enum';
import { Address } from '../../address/entities/address.entity';
import { AddressService } from '../../address/interfaces/address.interface';
import { AddressProvider } from '../../common/address-provider/address-provider.interface';

@Injectable()
export class AccountServiceImpl implements AccountService {
  constructor(
    @Inject(DITokensEnum.accountDAO) private accountDAO: AccountDao,
    @Inject(DITokensEnum.addressProvider)
    private addressProvider: AddressProvider,
  ) {}

  async createAccount(createAccountDTO: CreateAccountDto): Promise<Account> {
    if (await this.getAccountByCPF(createAccountDTO.cpf)) {
      throw new ConflictException('CPF already exists');
    }

    // last check if address is a valid one
    await this.addressProvider.getAddressByCEP(
      createAccountDTO.accountAddress.cep,
    );

    const account = this.buildNewAccount(createAccountDTO);

    return await this.accountDAO.save(account);
  }

  private buildNewAccount(createAccountDTO: CreateAccountDto) {
    const account = new Account();
    account.cpf = createAccountDTO.cpf;
    account.firstName = createAccountDTO.firstName;
    account.lastName = createAccountDTO.lastName;
    account.phone = createAccountDTO.phone;
    account.address = new Address();
    account.address.address = createAccountDTO.accountAddress.address;
    account.address.address1 = createAccountDTO.accountAddress.address1;
    account.address.cep = createAccountDTO.accountAddress.cep;
    account.address.neighborhood = createAccountDTO.accountAddress.neighborhood;
    account.address.city = createAccountDTO.accountAddress.city;
    account.address.state = createAccountDTO.accountAddress.state;
    return account;
  }

  async getAccountByCPF(cpf: string): Promise<Account> {
    return await this.accountDAO.getByCPF(cpf);
  }
}
