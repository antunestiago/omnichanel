export interface AddressProvider {
  getAddressByCEP(cep: string): object;
}

export interface AddressResponse {
  cep: string;
  address: string;
  address1: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: number;
  siafi: string;
}
