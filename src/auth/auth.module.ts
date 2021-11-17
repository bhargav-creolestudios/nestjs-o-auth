import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { GoogleOAuthStrategy } from './strategies/googleStrategy';
import { FacebookStrategy } from './strategies/facebookStrategy';
import { SessionSerializer } from './utils/Serializer';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [AuthController],
    providers: [
        GoogleOAuthStrategy,
        FacebookStrategy,
        SessionSerializer,
        {
            provide: 'AUTH_SERVICE',
            useClass: AuthService
        }
    ]
})
export class AuthModule {}
