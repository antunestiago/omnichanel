import { AccountDao } from '../interfaces/account-dao.interface';
import { Account } from '../entities/account.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class AccountDaoImpl implements AccountDao {
  constructor(
    @InjectRepository(Account) private readonly repository: Repository<Account>,
  ) {}

  async save(account: Account): Promise<Account> {
    return await this.repository.save(account);
  }

  async getByCPF(cpf: string): Promise<Account> {
    return await this.repository.findOneBy({ cpf: cpf });
  }
}
