import { HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logEvent(event: HttpEvent<any> | string) {
    console.log("logEvent : ", event)
  }

  logRequestAndresponse(request: HttpRequest<any>, resp: HttpEvent<any>) {
    console.warn("log Request : ", request)
    console.warn("log Response : ", resp)
  }
  
}
