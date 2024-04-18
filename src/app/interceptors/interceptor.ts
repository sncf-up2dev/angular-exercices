import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { filter, tap } from "rxjs";
import { LoggingService } from "./logging.service";
import { inject } from "@angular/core";
import { IS_LOGGING_ENABLED } from "./context-token";

export const loggingInterceptorFn: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
) => {

   const loggingService = inject(LoggingService);
   const isLogged = req.context.get(IS_LOGGING_ENABLED);
  
    
   if (isLogged) {
    return next(req).pipe(
        tap((resp) => resp instanceof HttpResponse ? loggingService.logEvent(resp) : '')
    )
   }
   return next(req).pipe(
    tap(() => loggingService.logEvent(`isLogged : ${isLogged}`))
    )

}

export const loggingRequestAndResponseFn: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
) => {

    const loggingService = inject(LoggingService);
    const isLogged = req.context.get(IS_LOGGING_ENABLED);

    
    if (isLogged) {
        return next(req).pipe(
            tap(
                (resp) => resp instanceof HttpResponse ? loggingService.logRequestAndresponse(req, resp) : ''
            )
        )
    }
    return next(req)
}