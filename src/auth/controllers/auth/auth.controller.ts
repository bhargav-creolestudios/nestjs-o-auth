import { Controller, Get, Response } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Get('/login')
    login(){ return }

    @Get('/redirect')
    redirect(@Response() res){
        res.send(200)
    }

    @Get('/status')
    status(){}

    @Get('/logout')
    logout(){}
}
