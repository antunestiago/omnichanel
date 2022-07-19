import { CreateAccountDto } from '../dto/create-account.dto';
import { Account } from '../entities/account.entity';

export interface AccountService {
  createAccount(createAccountDTO: CreateAccountDto): Promise<Account>;
  getAccountById(id: number): Promise<Account>;
}
