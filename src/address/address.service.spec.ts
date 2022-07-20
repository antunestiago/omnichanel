import { AddressServiceImpl } from './address.service';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { AddressDao } from './interfaces/address-dao.interface';
import { AddressProvider } from '../common/address-provider/address-provider.interface';
import { AddressService } from './interfaces/address.interface';

describe('AddressServiceImpl', () => {
  let service: AddressService;
  let addressDaoMock: DeepMocked<AddressDao>;
  let addressProviderMock: DeepMocked<AddressProvider>;

  beforeEach(async () => {
    addressDaoMock = createMock<AddressDao>();
    addressProviderMock = createMock<AddressProvider>();

    service = new AddressServiceImpl(addressDaoMock, addressProviderMock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
