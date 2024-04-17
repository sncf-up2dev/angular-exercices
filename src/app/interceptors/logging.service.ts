import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logResponse(response: HttpResponse<any>) {
    console.log(response)
  }

}
