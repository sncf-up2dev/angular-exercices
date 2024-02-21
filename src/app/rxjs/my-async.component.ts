import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyAsyncPipe } from './my-async.pipe';
import { interval } from 'rxjs';

@Component({
  selector: 'app-my-async',
  standalone: true,
  imports: [CommonModule, MyAsyncPipe],
  template: `
    Angular pipe async : {{ interval$ | async }} 
    MyAsyncPipe : {{ interval$ | myAsync }}
  `,
  styles: ``
})
export class MyAsyncComponent {

  interval$ = interval(1000)

}
