import { Module } from '@nestjs/common';
import { AccountServiceImpl } from './services/account.service';
import { AccountController } from './account.controller';
import { Account } from './entities/account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountDaoImpl } from './dao/account.dao';
import { DITokensEnum } from '../common/enums/DITokens.enum';
import { AddressProviderModule } from '../common/address-provider/address-provider.module';
import { HttpModule } from '@nestjs/axios';
import { AddressProviderImpl } from '../common/address-provider/address-provider.provider';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account]),
    AddressProviderModule,
    HttpModule,
  ],
  controllers: [AccountController],
  providers: [
    { provide: DITokensEnum.accountService, useClass: AccountServiceImpl },
    { provide: DITokensEnum.accountDAO, useClass: AccountDaoImpl },
    { provide: DITokensEnum.addressProvider, useClass: AddressProviderImpl },
  ],
})
export class AccountModule {}
