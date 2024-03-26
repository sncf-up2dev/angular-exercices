import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { ClientService } from './client.service';
import { NEVER, Observable, Subscription, concatAll, concatMap, debounceTime, delay, distinctUntilChanged, exhaustMap, first, fromEvent, iif, interval, map, merge, mergeAll, mergeMap, of, switchAll, switchMap, tap, throttle } from 'rxjs';
import { Client } from './client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input #input/>
    <div class="border">
      <div *ngFor="let client of clientsMerge$ | async" class="item">
        Merge : {{ client.firstname }}
      </div>
    </div>
    
    <!-- <div class="border">
      <div *ngFor="let client of clientsSwitch$ | async" class="item">
        Switch {{ client.firstname }}
      </div>
    </div>

    <div class="border">
      <div *ngFor="let client of clientsConcat$ | async" class="item">
       Concat : {{ client.firstname }}
      </div>
    </div>

    <div class="border">
      <div *ngFor="let client of clientsExhaust$ | async" class="item">
        Exhaust :{{ client.firstname }}
      </div>
    </div> -->
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
export class AutocompleteComponent implements AfterViewInit {

  clientService = inject(ClientService)

  @ViewChild('input')
  viewInput!: ElementRef<HTMLInputElement>

  clientsMerge$?: Observable<Client[]>


  ngAfterViewInit(): void {
    this.clientsMerge$ = fromEvent(this.viewInput.nativeElement, 'input').pipe(
      debounceTime(2000),
      distinctUntilChanged(),
      mergeMap(ev => {
        const event = (ev.target as HTMLInputElement).value
        // return iif(() => event.length >= 3, this.clientService.getFilteredSortedClients(event), NEVER)
        return event.length >= 3 ? this.clientService.getFilteredSortedClients(event) : NEVER
      }),
    )  
  }

  /** Test
    clientsSwitch$?: Observable<Client[]>
    clientsConcat$?: Observable<Client[]>
    clientsExhaust$?: Observable<Client[]>
      this.clientsSwitch$ = fromEvent(this.viewInput.nativeElement, 'input').pipe(
        switchMap(ev => this.clientService.getFilteredSortedClients((ev.target as HTMLInputElement).value)),
        )
      this.clientsConcat$ = fromEvent(this.viewInput.nativeElement, 'input').pipe(
        concatMap(ev => this.clientService.getFilteredSortedClients((ev.target as HTMLInputElement).value)),
      )
      this.clientsExhaust$ = fromEvent(this.viewInput.nativeElement, 'input').pipe(
        exhaustMap(ev => this.clientService.getFilteredSortedClients((ev.target as HTMLInputElement).value)),
      )
  */
}
