import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from './account.controller';

describe('AccountController', () => {
  let controller: AccountController;

  beforeEach(async () => {
    let AccountService;
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [],
    }).compile();

    controller = module.get<AccountController>(AccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
