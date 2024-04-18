import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logEvent(event: HttpEvent<any> | string) {
    console.log(event)
  }

}
