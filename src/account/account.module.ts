import { Module } from '@nestjs/common';
import { AccountServiceImpl } from './services/account.service';
import { AccountController } from './account.controller';
import { Account } from './entities/account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountDaoImpl } from './dao/account.dao';
import { DITokensEnum } from '../common/enums/DITokens.enum';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountController],
  providers: [
    { provide: 'AccountService', useClass: AccountServiceImpl },
    { provide: DITokensEnum.accountDAO, useClass: AccountDaoImpl },
  ],
})
export class AccountModule {}
