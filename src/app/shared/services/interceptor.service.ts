import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from 'app/pages/content-pages/login/_services/login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  private token : string = '';
  constructor(
    private authService: LoginService
  ) {
    this.authService.getToken()
    .subscribe((token:string) => (this.token = token))
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers: any = {'Content-Type': `application/json` }

    if(this.token !== '') {
      headers.Authorization = `Bearer ${this.token}`
    }

    let request:any

    if(req.method.toLowerCase() === "post"){
      request = req.clone({
        setHeaders: headers,
      })
    }
    else if(req.method.toLowerCase() === "get" || req.method.toLowerCase() === "put" || req.method.toLocaleLowerCase() === "delete"){
      request = req.clone({
        setHeaders: headers,
      })
    }

    return next.handle(request)
  }



}
