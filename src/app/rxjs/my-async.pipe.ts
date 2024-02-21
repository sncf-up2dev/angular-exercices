import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Pipe({
  name: 'myAsync',
  standalone: true,
  pure: false
})
export class MyAsyncPipe<T> implements PipeTransform, OnDestroy {

  subscription?: Subscription

  transform(value: Observable<T>): T | null {
    return null;
  }

  ngOnDestroy(): void {
    // Gestion du désabonnement
    this.subscription?.unsubscribe()
  }

}
