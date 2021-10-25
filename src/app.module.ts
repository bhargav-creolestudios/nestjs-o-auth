import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { GoogleModule } from './google/google.module';
import { entities } from './typeorm';
import { UsersService } from './users/users.service';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    AuthModule,
    GoogleModule,
    PassportModule.register({ session: true }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Creole@123',
      database: 'nestjs_o',
      entities: entities,
      synchronize: true,
    })
],
  controllers: [AppController],
  providers: [UsersService],
})
export class AppModule {}
