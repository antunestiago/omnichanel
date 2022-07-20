import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  AddressProvider,
  AddressResponse,
  ViaCepResponse,
} from './address-provider.interface';

@Injectable()
export class AddressProviderImpl implements AddressProvider {
  baseUrl = 'https://viacep.com.br/ws/';
  constructor(private readonly httpService: HttpService) {}

  async getAddressByCEP(cep: string): Promise<AddressResponse> {
    return await this.httpService
      .get(`${this.baseUrl}${cep}/json`)
      .toPromise()
      .then((resp) => {
        const viaCepResult: ViaCepResponse = resp.data;
        const addressResponse: AddressResponse = {
          cep: viaCepResult.cep,
          address: viaCepResult.logradouro,
          address1: viaCepResult.complemento,
          city: viaCepResult.localidade,
          neighborhood: viaCepResult.bairro,
          state: viaCepResult.uf,
        };

        return addressResponse;
      })
      .catch((rej) => {
        throw new InternalServerErrorException(rej, 'error in ViaCEPProvider');
      });
  }
}
