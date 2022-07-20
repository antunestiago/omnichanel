import { Test, TestingModule } from '@nestjs/testing';
import { AddressProviderImpl } from './address-provider.provider';
import { DITokensEnum } from '../enums/DITokens.enum';
import { HttpModule } from '@nestjs/axios';
import { AddressProvider } from './address-provider.interface';

describe('AddressProviderService', () => {
  let service: AddressProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        {
          provide: DITokensEnum.addressProvider,
          useClass: AddressProviderImpl,
        },
      ],
    }).compile();

    service = module.get<AddressProvider>(DITokensEnum.addressProvider);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('should return address', async () => {
  //   const response = await service.getAddressByCEP('01001000');
  //
  //   expect(response).toBeDefined();
  // });
});
