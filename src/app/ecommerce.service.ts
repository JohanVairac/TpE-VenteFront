import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EcommerceService {
  constructor(private http: HttpClient) { }
   getCommandes() {// hiya List
        return this.http.get('http://localhost:8080/commandes/'); // je trouve ca get et 8080 dans back
    }
     saveCommande(commandes: any) {
        return this.http.post('http://localhost:8080/commandes/', commandes); // on est en post et on passe le parametr produit
    }
}
