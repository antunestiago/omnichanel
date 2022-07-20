import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import {
  AddressProvider,
  AddressResponse,
  ViaCepResponse,
} from './address-provider.interface';
import { MessageErrorsEnum } from '../enums/message-errors.enum';
import { map } from 'rxjs';

@Injectable()
export class AddressProviderImpl implements AddressProvider {
  baseUrl = 'https://viacep.com.br/ws/';
  constructor(private readonly httpService: HttpService) {}

  async getAddressByCEP(cep: string): Promise<AddressResponse> {
    const response = await this.httpService
      .get(`${this.baseUrl}${cep}/json`)
      .toPromise();

    if ('erro' in response.data) {
      throw new NotFoundException(MessageErrorsEnum.viaCepGeneralError);
    }

    const viaCepResult: ViaCepResponse = response.data;
    return {
      cep: viaCepResult.cep,
      address: viaCepResult.logradouro,
      address1: viaCepResult.complemento,
      city: viaCepResult.localidade,
      neighborhood: viaCepResult.bairro,
      state: viaCepResult.uf,
    };
  }
}
