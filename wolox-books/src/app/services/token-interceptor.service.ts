import { Injectable, Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(req, next) {
    const userService = this.injector.get(UserServiceService);
    const tokenizedReq = req.clone({
        setHeaders : {
          Authorization: `Wolox ${userService.getToken()}`
        }
    });
    return next.handle(tokenizedReq);
    }
}
