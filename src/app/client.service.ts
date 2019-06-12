import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

	constructor(private http: HttpClient) {

	
   }
   getClient() {
      return this.http.get('http://localhost:8080/clients/');
  }

  saveClient(client) {
      return this.http.post('http://localhost:8080/produits/', client);
    }
}
