import { Controller, Get, Request, Response, UseGuards } from '@nestjs/common';
import { AuthenticationGuard, GoogleOAuthGuard } from 'src/auth/guards';

@Controller('auth')
export class AuthController {
    @Get('/login')
    @UseGuards(GoogleOAuthGuard)
    login(){ return }

    @Get('/redirect')
    @UseGuards(GoogleOAuthGuard)
    redirect(@Response() res){
        res.send(200)
    }

    @Get('/status')
    @UseGuards(AuthenticationGuard)
    status(@Response() res){
        res.send(200)
    }

    // @Get('/logout')
    // logout(@Request() req){
    //     req.logout();
    // }
}
