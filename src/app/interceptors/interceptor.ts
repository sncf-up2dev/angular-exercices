import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse} from "@angular/common/http";
import {inject} from "@angular/core";
import {LoggingService} from "./logging.service";
import {tap} from "rxjs";
import {USER_IS_LOGGED} from "./context.token";


export const loggingInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const loggingService = inject(LoggingService)
  if (USER_IS_LOGGED) {
    return next(req).pipe(
      tap((event: HttpEvent<any>) => {
        loggingService.logEvent(event as HttpResponse<any>)
      })
    )
  }
  return next(req)
}
