import { CreateAddressDto } from '../../address/dto/create-address.dto';

export class CreateAccountDto {
  firstName: string;

  lastName: string;

  cpf: string;

  phone: string;

  accountAddress: CreateAddressDto;
}
