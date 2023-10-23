import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Role } from "./roles.enum";
import { AppJwtService } from "src/app-jwt/app-jwt.service";

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private reflector: Reflector, private appJwtService: AppJwtService) { }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requireRoles = this.reflector.getAllAndOverride<Role[]>
        ("roles",  [ context.getHandler(), context.getClass()] );
        
        if (!requireRoles) { return true; }
        const request = context.switchToHttp().getRequest();
        const authorizationHeader = request.headers.authorization;
        if (!authorizationHeader){ throw new UnauthorizedException('Authorization header not found'); }
        const role = (this.appJwtService.verify( authorizationHeader.split(' ')[1] )).role as Role;
        return requireRoles.includes(role);
    }

}