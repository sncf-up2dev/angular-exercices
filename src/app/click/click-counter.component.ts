import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, auditTime, debounceTime, delay, fromEvent, interval, last, map, mergeScan, reduce, scan, startWith, take, takeLast, takeUntil, tap, throttleTime, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
      Coucou
      <button #button (click)="count($event)">
        Click me !
            
      </button>

      <h1>{{ counter$ | async }}</h1>
      {{inter$ | async}}
  `,
  styles: ``
})
export class ClickCounterComponent  {

  counter$!: Observable<number>; 
  inter$!: Observable<any>;
  
  
  
  ngOnInit() {
    this.inter$ = interval(1000).pipe(
      startWith(0),
      map((x) => x + 1 )
    )
  }
  
  @ViewChild('button')
  button!: ElementRef<HTMLButtonElement>

  // Problème : si on reclique sur le bouton ça relance indéfiniement
  // il faut cliquer une fois sur le bouton puis ensuite ailleurs
  // Idée : le stopPropagation() ?
  count(e: MouseEvent) {
    e.stopPropagation();
    // this.counter$ = fromEvent(this.button.nativeElement, 'click').pipe(
    this.counter$ = fromEvent(document, 'click').pipe(
      takeUntil(interval(2000)),
      // delay(2000),
      map(_ => 1),
      scan((acc, val) => acc + val),
      last()
      )
      // e.stopPropagation();
  }
}