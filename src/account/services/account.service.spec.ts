import { Test, TestingModule } from '@nestjs/testing';
import { AccountServiceImpl } from './account.service';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { AccountDao } from '../interfaces/account-dao.interface';
import { CreateAccountDto } from '../dto/create-account.dto';
import { AddressProvider } from '../../common/address-provider/address-provider.interface';

describe('AccountService', () => {
  let service: AccountServiceImpl;
  let accountDaoMock: DeepMocked<AccountDao>;
  let addressProviderMock: DeepMocked<AddressProvider>;

  beforeAll(() => {
    accountDaoMock = createMock<AccountDao>();
    addressProviderMock = createMock<AddressProvider>();
    service = new AccountServiceImpl(accountDaoMock, addressProviderMock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should save create a account', async () => {
    accountDaoMock.save.mockResolvedValue({
      id: 1,
      cpf: '0091381232',
      firstName: 'Chaly',
      lastName: 'Benchimol',
      phone: '+559298284322',
      address: {
        id: 1,
        address: 'asdas',
        address1: '',
        cep: '82737623',
        city: 'Manaus',
        state: 'AM',
        neighborhood: 'centro',
      },
    });

    accountDaoMock.getByCPF.mockResolvedValueOnce(undefined);

    const createAccountDto1: CreateAccountDto = {
      cpf: '0091381232',
      firstName: 'Chaly',
      lastName: 'Benchimol',
      phone: '+559298284322',
      accountAddress: {
        address: 'asdas',
        address1: '',
        cep: '82737623',
        city: 'Manaus',
        state: 'AM',
        neighborhood: 'centro',
      },
    };

    const result = await service.createAccount(createAccountDto1);

    expect(result).toBeDefined();
    expect(result.cpf).toBe(createAccountDto1.cpf);
    expect(result.id).toBe(1);
  });
});
