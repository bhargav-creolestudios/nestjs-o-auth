import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class GoogleOAuthGuard extends AuthGuard('google') {
    async canActivate(context: ExecutionContext): Promise<any> {
        const activate = (await super.canActivate(context)) as boolean;
        
        const request = context.switchToHttp().getRequest();
        
        await super.logIn(request);
        return activate;
    }
}

@Injectable()
export class AuthenticationGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        return req.isAuthenticated();
    }
}