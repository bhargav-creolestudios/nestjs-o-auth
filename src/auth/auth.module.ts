import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { GoogleOAuthStrategy } from './strategies';

@Module({
    controllers: [AuthController],
    providers: [
    GoogleOAuthStrategy, // Get creds today!!!!!
    AuthService]
})
export class AuthModule {}
