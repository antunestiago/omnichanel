import { Test, TestingModule } from '@nestjs/testing';
import { AccountServiceImpl } from './account.service';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { AccountDao } from '../interfaces/account-dao.interface';
import { CreateAccountDto } from '../dto/create-account.dto';

describe('AccountService', () => {
  let service: AccountServiceImpl;
  let accountDaoMock: DeepMocked<AccountDao>;

  beforeAll(() => {
    accountDaoMock = createMock<AccountDao>();
    service = new AccountServiceImpl(accountDaoMock);
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
    });

    accountDaoMock.getByCPF.mockResolvedValueOnce(undefined);

    const createAccountDto1: CreateAccountDto = {
      cpf: '0091381232',
      firstName: 'Chaly',
      lastName: 'Benchimol',
      phone: '+559298284322',
    };

    const result = await service.createAccount(createAccountDto1);

    expect(result).toBeDefined();
    expect(result.cpf).toBe(createAccountDto1.cpf);
    expect(result.id).toBe(1);
  });
});
