import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateAccountDto } from '../dto/create-account.dto';
import { UpdateAccountDto } from '../dto/update-account.dto';
import { AccountService } from '../interfaces/account.interface';
import { Account } from '../entities/account.entity';
import { AccountDao } from '../interfaces/account-dao.interface';
import { DITokensEnum } from '../../common/enums/DITokens.enum';

@Injectable()
export class AccountServiceImpl implements AccountService {
  constructor(
    @Inject(DITokensEnum.accountDAO) private accountDAO: AccountDao,
  ) {}

  async createAccount(createAccountDTO: CreateAccountDto): Promise<Account> {
    if (await this.getAccountByCPF(createAccountDTO.cpf)) {
      throw new ConflictException('CPF already exists');
    }

    const account = new Account();
    account.cpf = createAccountDTO.cpf;
    account.firstName = createAccountDTO.firstName;
    account.lastName = createAccountDTO.lastName;
    account.phone = createAccountDTO.phone;

    return await this.accountDAO.save(account);
  }

  async getAccountByCPF(cpf: string): Promise<Account> {
    return await this.accountDAO.getByCPF(cpf);
  }
}
