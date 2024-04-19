import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logEvent(event: HttpResponse<any>) {
    console.log(event)
  }

}
