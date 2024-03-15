import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Pipe({
  name: 'myAsync',
  standalone: true,
  pure: false
})
export class MyAsyncPipe<T> implements PipeTransform, OnDestroy {

  subscription?: Subscription
  lastValue: T | null = null
  obs: Observable<T> | null = null

  transform(obs: Observable<T>): T | null {

    if (this.obs !== obs) {
      this.subscription?.unsubscribe()
      this.lastValue = null
      this.subscription = obs.subscribe(
        v => {
          console.log("Valeur émise " + v)
          this.lastValue = v
        }
      )
      this.obs = obs
    }

    return this.lastValue
  }

  ngOnDestroy(): void {
    // Gestion du désabonnement
    console.log("Désabonnement")
    this.subscription?.unsubscribe()
  }

}
