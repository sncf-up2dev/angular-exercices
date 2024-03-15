import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { ClientService } from './client.service';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <input #input/>
  `,
  styles: `
    .item {
        margin: 0px;
        padding: 0px;
        padding-left: 8px;
      }
    .item:hover {
        background: #eee;
      }
    .border {
      width: 500px;
      padding: 0px;
      margin: 0px
    }
    input {
      width: 500px;
      margin-bottom: 0px
    }
  `
})
export class AutocompleteComponent implements AfterViewInit, OnDestroy {

  clientService = inject(ClientService)

  @ViewChild('input')
  viewInput!: ElementRef<HTMLInputElement>

  subscription?: Subscription

  ngAfterViewInit(): void {
    this.subscription = fromEvent(this.viewInput.nativeElement, 'input').subscribe(
      ev => {
        let filter = (ev.target as HTMLInputElement).value
        this.clientService.getFilteredSortedClients(filter).subscribe(
          console.log
        )
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
