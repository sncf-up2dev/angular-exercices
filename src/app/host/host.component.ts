import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <div class="border" [style.font-size.px]='size' (click)="size = size + 10">
      Exercice HostComponent
    </div>
  `,
  styles: `
    .border {
      display: block;

      border: 5px solid black;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  `,
})
export class HostComponent {

  size = 10

}
