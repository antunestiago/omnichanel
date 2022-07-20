import { CreateAccountDto } from '../dto/create-account.dto';
import { Account } from '../entities/account.entity';

export interface AccountDao {
  save(account: Account): Promise<Account>;
  getByCPF(cpf: string): Promise<Account>;
}
