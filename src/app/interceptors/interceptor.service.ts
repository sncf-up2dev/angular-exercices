import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /* Squelette de l'exercice pour la version service 
        Pour que l'intercepteur fonctionne, voici les providers à utiliser dans le main.ts
        providers: [
          { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
          provideHttpClient(
            withInterceptorsFromDi()
          )
        ]
    */
    console.log(req)
    return next.handle(req)
  }

}
