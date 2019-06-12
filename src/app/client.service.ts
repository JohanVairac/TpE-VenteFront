import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

	constructor(private http: HttpClient) {

	
   }
    getClients() {
      return this.http.get('http://localhost:8080/clients');
  }

  saveClient(client :any) {
      return this.http.post('http://localhost:8080/clients/', client);
    }
}
