import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn : 'root'
})
export class AuthInterceptor implements HttpInterceptor{

    constructor(private router : Router) {

    }

    intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
        const jwt = localStorage.getItem("jwt")

        let request = req.clone({
            setHeaders : {
                Authorization : 'Bearer ' + jwt
            }
        })
        
        return next.handle(request).pipe(
            catchError((err : HttpErrorResponse) => {
                if (err.status === 401) {
                    this.router.navigateByUrl('')
                }

                return throwError( err )
            })
        )

    }

}
