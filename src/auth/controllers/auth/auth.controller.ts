import { Controller, Get, Request, Response, UseGuards } from '@nestjs/common';
import { AuthenticationGuard, GoogleOAuthGuard, FacebookAuthGuard } from 'src/auth/guards';

@Controller('auth')
export class AuthController {
    @Get('/login/google')
    @UseGuards(GoogleOAuthGuard)
    googleLogin(){ return }

    @Get('/login/facebook')
    @UseGuards(FacebookAuthGuard)
    facebookLogin(){ return }

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
