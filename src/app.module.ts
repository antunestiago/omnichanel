import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressProviderModule } from './common/address-provider/address-provider.module';

@Module({
  imports: [
    AccountModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AddressProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
