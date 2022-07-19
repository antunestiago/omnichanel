import { Module } from '@nestjs/common';
import { AccountServiceImpl } from './services/account.service';
import { AccountController } from './account.controller';
import { Account } from './entities/account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountDaoImpl } from './dao/account.dao';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountController],
  providers: [
    { provide: 'AccountService', useClass: AccountServiceImpl },
    { provide: 'AccountDAO', useClass: AccountDaoImpl },
  ],
})
export class AccountModule {}
