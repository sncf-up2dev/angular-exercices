import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _http = inject(HttpClient)

  getFilteredClients(filter: string): Observable<Client[]> {
    return undefined as unknown as Observable<Client[]>
  }

}
