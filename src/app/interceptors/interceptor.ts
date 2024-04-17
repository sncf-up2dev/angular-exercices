import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";

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
            )
        ]
    */
    console.log(req)
    return next(req)
}