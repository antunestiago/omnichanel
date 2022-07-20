import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressService } from './interfaces/address.interface';
import { DITokensEnum } from '../common/enums/DITokens.enum';

@Controller('address')
export class AddressController {
  constructor(
    @Inject(DITokensEnum.addressService)
    private readonly addressService: AddressService,
  ) {}

  // @Post()
  // create(@Body() createAddressDto: CreateAddressDto) {
  //   return this.addressService.create(createAddressDto);
  // }

  @Get(':cep')
  findOne(@Param('cep') cep: string) {
    return this.addressService.getFurtherInfoAddressByCEP(cep);
  }
}
