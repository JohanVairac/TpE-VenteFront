import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) { }

   getCatalogue() {
      return this.http.get('http://localhost:8080/catalogues/');
  }

}
