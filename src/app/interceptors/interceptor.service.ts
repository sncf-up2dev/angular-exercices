import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoggingService } from './logging.service';
import { IS_LOGGING_ENABLED } from './interceptor';

/* Providers à fournir avec la version service
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
    provideHttpClient(
      withInterceptorsFromDi()
    )
  ]
*/

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  private logService = inject(LoggingService)

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.context.get(IS_LOGGING_ENABLED)) {
      return next.handle(req).pipe(
        tap(response => response instanceof HttpResponse ? this.logService.logEvent(response) : 0)
      )
    }

    return next.handle(req)
  }

}
