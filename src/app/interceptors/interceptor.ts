import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";
import { LoggingService } from "./logging.service";
import { inject } from "@angular/core";
import { IS_LOGGING_ENABLED } from "./context-token";

export const loggingInterceptorFn: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
) => {
    /* Squelette de l'exercice pour la version fonction 
    Pour que l'intercepteur fonctionne, voici les providers à utiliser dans le main.ts
        providers: [
            provideHttpClient(
                withInterceptors([
                    loggingInterceptorFn
                    ])
            )²
        ]
    */
   const loggingService = inject(LoggingService);
   const isLogged = req.context.get(IS_LOGGING_ENABLED);
  

   if (isLogged) {
    return next(req).pipe(
        tap(e => loggingService.logEvent(e))
    )
   } else {
    return next(req).pipe(
        tap(() => console.log("Requête : ", req)),
        tap(() => loggingService.logEvent(`isLogged : ${isLogged}`))
    )
   }
}