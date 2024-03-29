import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly CLIENT_URL = "http://localhost:3000/clients"

  private _http = inject(HttpClient)

  getFilteredSortedClients(filter: string): Observable<Client[]> {
    const params = new HttpParams()
      .append("_sort", "firstname")
      .append("firstname_like", filter)

    return this._http.get<Client[]>(
      this.CLIENT_URL,
      { params: params }
    )
  }

}
