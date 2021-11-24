import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
    constructor(private injector: Injector) { }

    intercept(req:any, next:any) {

        let tokenizedReq = req.clone({
            setHeaders: {
              'Access-Control-Allow-Origin':'*',
            }
        });

        return next.handle(tokenizedReq);
    }
}
