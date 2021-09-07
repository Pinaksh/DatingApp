import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private toster:ToastrService){};

  canActivate(
    ): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (user){
          return true;
          this.toster.error('You shall not pass!');
        }else{
          this.toster.error('Please login to access the page!');
          return false;                    
        }
      })
    );
  }
  
}
