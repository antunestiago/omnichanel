import { Inject, Injectable } from '@nestjs/common';
import { CreateAccountDto } from '../dto/create-account.dto';
import { UpdateAccountDto } from '../dto/update-account.dto';
import { AccountService } from '../interfaces/account.interface';
import { Account } from '../entities/account.entity';
import { AccountDao } from '../interfaces/account-dao.interface';

@Injectable()
export class AccountServiceImpl implements AccountService {
  constructor(@Inject('AccountDAO') private accountDAO: AccountDao) {}

  async createAccount(createAccountDTO: CreateAccountDto): Promise<Account> {
    const account = new Account();
    account.cpf = createAccountDTO.cpf;
    account.firstName = createAccountDTO.firstName;
    account.lastName = createAccountDTO.lastName;
    account.phone = createAccountDTO.phone;

    return await this.accountDAO.save(account);
  }

  getAccountById(id: number): Promise<Account> {
    return Promise.resolve(undefined);
  }
}
