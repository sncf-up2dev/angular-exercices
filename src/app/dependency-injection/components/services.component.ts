import { Component, Inject, InjectionToken, Optional, Self, SkipSelf, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { BetterCounterService } from '../services/better-counter.service';
import { MinimalCounterService } from '../services/minimal-counter.service';

export type TypeCounter = 'normal' | 'better'

export const COUNTER_TOKEN = new InjectionToken<CounterService>('Independant Counter')
export const FACTORY_TOKEN = new InjectionToken<CounterService>('Independant Counter')

export const COUNTER_TYPE_TOKEN = new InjectionToken<TypeCounter>('Type Counter', {
  providedIn: 'root',
  factory: () => 'normal'
})

export const counterFactory = (type: TypeCounter) => {
  switch (type) {
    case ('normal'):
      return new CounterService();
    case ('better'):
      return new BetterCounterService();
  }
}

/* Father component */
@Component({
  providers: [
    CounterService,
    { provide: COUNTER_TYPE_TOKEN, useValue: 'better' },
    { provide: MinimalCounterService, useExisting: CounterService },
  ],

  selector: 'app-father',
  template: `
    <div class="border">
      <div>ServicesComponent : {{ counterService.value }}</div>
      <app-child ></app-child>
      <app-child ></app-child>
    </div>
  `,
  styleUrls: []
})
export class ServicesFatherComponent {

  counterService = inject(MinimalCounterService)

}


/* Child component */

@Component({
  selector: 'app-child',
  template: `
    <div class="border">
      <div>ServicesChildComponent : </div> 
      <div>counter with default : {{counterServiceWithDefault?.value}}</div>
      <div>second counter : {{secondCounterService.value}}</div>
      <div>factory Counter : {{factoryCounterService.value}}</div>
      <button (click)="counterServiceWithDefault?.incrementValue()">Increment 1</button>
      <button (click)="secondCounterService.incrementValue()">Increment 2</button>
      <button (click)="factoryCounterService.incrementValue()">Increment 3</button>
    </div>
  `,
  styleUrls: [],
  providers: [
    { provide: COUNTER_TOKEN, useClass: BetterCounterService },
    { provide: FACTORY_TOKEN, useFactory: counterFactory, deps: [COUNTER_TYPE_TOKEN] }
  ]
})
export class ServicesChildComponent {

  constructor(
    @Optional() @SkipSelf() public counterServiceWithDefault: CounterService | null,
    @Inject(COUNTER_TOKEN) public secondCounterService: CounterService,
    @Inject(FACTORY_TOKEN) public factoryCounterService: CounterService,
  ) {
    if (this.counterServiceWithDefault === null) {
      this.counterServiceWithDefault = new CounterService()
    }
  }

}

