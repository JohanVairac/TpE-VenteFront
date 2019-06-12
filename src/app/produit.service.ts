import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

	

  constructor(private http: HttpClient) {

	
   }

  
   


   getProduit() {
      return this.http.get('http://localhost:8080/produits/');
  }

  saveProduit(produit) {
      return this.http.post('http://localhost:8080/produits/', produit);
    }


}
