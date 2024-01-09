import { Component, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';

/* Father component */

@Component({
  providers: [
  ],

  selector: 'app-father',
  template: `
    <div class="border">
      <div>ServicesComponent : {{counterService.value}}</div>
      <button (click)="increment()">Increment</button>
      <app-child></app-child>
      <app-child></app-child>
    </div>
  `,
  styleUrls: []
})
export class ServicesFatherComponent {

  counterService = inject(CounterService)

  increment() {
    this.counterService!.incrementValue()
  }
}


/* Child component */

@Component({
  selector: 'app-child',
  template: `
    <div class="border">
      <div>ServicesChildComponent : </div> 
      <div>  first counter : {{firstCounterService.value}}</div>
      <div>  second counter : {{secondCounterService.value}}</div>
      <button (click)="increment1()">Increment 1</button> <button (click)="increment2()">Increment 2</button>
    </div>
  `,
  styleUrls: []
})
export class ServicesChildComponent {

  constructor(
    public firstCounterService: CounterService,
    public secondCounterService: CounterService
  ) { }

  increment1() {
    this.firstCounterService.incrementValue()
  }

  increment2() {
    this.secondCounterService.incrementValue()
  }

}

