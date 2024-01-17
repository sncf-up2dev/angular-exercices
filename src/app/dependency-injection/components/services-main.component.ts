import { Component } from "@angular/core";
import { COUNTER_TYPE_TOKEN } from "./services.component";

@Component({
  providers: [
    { provide: COUNTER_TYPE_TOKEN, useValue: 'normal' },
  ],

  selector: 'app-root',
  template: `
        <app-father></app-father>
        <app-child></app-child>
    `,
  styleUrls: []
})
export class ServicesMainComponent {

}
