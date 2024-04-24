import { HttpContextToken, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { filter, tap } from "rxjs";
import { LoggingService } from "./logging.service";

export const IS_LOGGING_ENABLED = new HttpContextToken<boolean>(() => false)

/* Providers à fournir avec la version fonctionelle
  providers: [
    provideHttpClient(
      withInterceptors([logInterceptorFn])
    )
  ]
*/

export const logInterceptorFn: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
) => {

    const logService = inject(LoggingService)

    if (req.context.get(IS_LOGGING_ENABLED)) {
        return next(req).pipe(
            tap(response => response instanceof HttpResponse ? logService.logEvent(response) : 0)
        )
    }

    return next(req)

}