import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { GoogleModule } from './google/google.module';
import { entities } from './typeorm';
import { UsersService } from './users/users.service';

@Module({
  imports: [AuthModule,
    GoogleModule,
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Creole@123',
    database: 'nestjs_o',
    entities: entities,
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [UsersService],
})
export class AppModule {}
