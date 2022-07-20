import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { DITokensEnum } from '../common/enums/DITokens.enum';
import { AddressProviderModule } from '../common/address-provider/address-provider.module';

import { AddressDaoImpl } from './dao/address.dao';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { AddressServiceImpl } from './address.service';
import { AddressProviderImpl } from '../common/address-provider/address-provider.provider';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([Address]),
    AddressProviderModule,
    HttpModule,
  ],
  controllers: [AddressController],
  providers: [
    { provide: DITokensEnum.addressDAO, useClass: AddressDaoImpl },
    { provide: DITokensEnum.addressService, useClass: AddressServiceImpl },
    { provide: DITokensEnum.addressProvider, useClass: AddressProviderImpl },
  ],
})
export class AddressModule {}
