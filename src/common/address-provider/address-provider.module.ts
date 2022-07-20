import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DITokensEnum } from '../enums/DITokens.enum';
import { AddressProviderImpl } from './address-provider.provider';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  providers: [
    { provide: DITokensEnum.addressProvider, useClass: AddressProviderImpl },
  ],
})
export class AddressProviderModule {}
