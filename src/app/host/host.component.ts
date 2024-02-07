import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    Exercice HostComponent
  `,
  styles: `
    :host {
      display: block;
      border: 5px solid black;
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 10px;
    }
  `,
  host: {
    '[style.font-size.px]': 'size',
    '(click)': 'onClick()'
  }
})
export class HostComponent {

  size = 10

  onClick() {
    this.size += 10
  }

}
