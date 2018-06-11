import { SharedService } from './../../services/shared.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    public shared: SharedService;

    constructor(private userService: UserService, private router: Router) {
        this.shared = SharedService.getInstance();
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this.shared.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}