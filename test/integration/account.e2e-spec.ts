import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AccountDao } from '../../src/account/interfaces/account-dao.interface';
import { CreateAccountDto } from '../../src/account/dto/create-account.dto';

describe('Account Integration', () => {
  let app: INestApplication;
  let accountDaoMock: AccountDao;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    accountDaoMock = app.get<AccountDao>('AccountDAO');
    await app.init();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should save create a account integration', async () => {
    jest.spyOn(accountDaoMock, 'save').mockResolvedValue({
      id: 123,
      cpf: '0091381232',
      firstName: 'Chaly',
      lastName: 'Benchimol',
      phone: '+559298284322',
    });

    const createAccountDto1: CreateAccountDto = {
      cpf: '0091381232',
      firstName: 'Chaly',
      lastName: 'Benchimol',
      phone: '+559298284322',
    };

    const response = await request(app.getHttpServer())
      .post(`/account`)
      .send(createAccountDto1);

    expect(response).toBeDefined();
    expect(response.status).toBe(HttpStatus.CREATED);
  });
});
