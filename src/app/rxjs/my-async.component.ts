import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyAsyncPipe } from './my-async.pipe';
import { Observable, interval } from 'rxjs';

const generateObs = () => new Observable<number>((subscriber) => {
  let i = 0

  let intervalId = setInterval(() => {
    console.log("Valeur émise : " + i)
    subscriber.next(i++)
  }, 1000);
  return () => {
    console.log("Teardown")
    clearInterval(intervalId)
  }
})

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MyAsyncPipe],
  template: `
    <div class="border" *ngIf="show">
      Angular pipe async : {{ obs$ | async }} 
      MyAsyncPipe : {{ obs$ | myAsync }}
    </div>
    <button (click)="show = !show">{{ show ? 'Hide' : 'Show'}}</button>
    <button (click)="regenerateObs()">Regenerate</button>
  `,
  styles: ``
})
export class MyAsyncComponent {

  show = true
  obs$ = generateObs()

  regenerateObs() {
    this.obs$ = generateObs()
  }

}
