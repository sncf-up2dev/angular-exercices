import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Observable, OperatorFunction, count, filter, first, fromEvent, interval, last, map, range, scan, startWith, take, takeLast, takeUntil, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngFor="let observable of observables; index as i">
        <button (click)="visibility[i] = !visibility[i]">Ex {{i + 1}}</button>
        <div class="border">
          <ng-container *ngIf="visibility[i]">
            {{ observable | async }}
          </ng-container>
        </div>
    </ng-container>
  `,
  styles: ``
})
export class RxjsOperateursComponent {

  // Ex 1
  takeUntilObs$ = interval(1000).pipe(
    startWith(0),
    map(x => 10 * x),
    map(x => `Valeur ${x} émise`)
  )

  // Ex 2
  rangeObs$ = range(1, 10).pipe(
    last()
  )

  // Ex 3
  clickObs$ = fromEvent(document, 'click').pipe(
    map(_ => 1),
    scan((acc, val) => acc + val)
  )

  // Ex 4
  firstObs$ = timer(5000).pipe(
    map(_ => "Timer écoulé"),
    first(),
    startWith("Chargement...")
  )

  // Ex 5
  firstVariantObs$ = timer(5000).pipe(
    startWith("Chargement..."),
    map(_ => "Timer écoulé"),
    first()
  )

  // Ex 6
  counterObs$ = interval(100).pipe(
    map(t => (5000 - t * 100) / 1000),
    takeWhile(v => v >= 0)
  )

  observables: Observable<unknown>[] = [
    this.takeUntilObs$,
    this.rangeObs$,
    this.clickObs$,
    this.firstObs$,
    this.firstVariantObs$,
    this.counterObs$
  ]

  visibility = this.observables.map(_ => false)

}
