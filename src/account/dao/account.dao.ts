import { AccountDao } from '../interfaces/account-dao.interface';
import { Account } from '../entities/account.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class AccountDaoImpl implements AccountDao {
  constructor(
    @InjectRepository(Account) private readonly accountDao: Repository<Account>,
  ) {}

  async save(account: Account): Promise<Account> {
    return await this.accountDao.save(account);
  }
}
