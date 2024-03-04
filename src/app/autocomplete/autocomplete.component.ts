import { AfterViewChecked, AfterViewInit, Component, inject } from '@angular/core';
import { ClientService } from './client.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <input #input/>
    <button (click)="request(input.value)">Request</button>
  `,
  styles: ``
})
export class AutocompleteComponent {

  clientService = inject(ClientService)

  request(input: string) {
    console.log(input)
  }

}
