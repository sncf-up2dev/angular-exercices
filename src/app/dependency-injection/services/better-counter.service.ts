import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class BetterCounterService extends CounterService {

  override incrementValue() {
    this.value += 2
  }

}
