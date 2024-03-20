import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { ClientService } from './client.service';
import { Observable, Subscription, concatAll, fromEvent, map, merge, mergeAll, mergeMap, switchAll, tap } from 'rxjs';
import { Client } from './client';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input #input/>
    <div class="border">
      <div *ngFor="let client of clients$ | async" class="item">
        {{ client.firstname }}
      </div>
    </div>
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

  clients$?: Observable<Client[]>

  ngAfterViewInit(): void {
    this.clients$ = fromEvent(this.viewInput.nativeElement, 'input').pipe(
      mergeMap(ev => this.clientService.getFilteredSortedClients((ev.target as HTMLInputElement).value)),
    )
  }
}
