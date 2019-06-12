import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }
   getPromotion() {// hiya List
        return this.http.get('http://localhost:8080/promotions/'); // je trouve ca get et 8080 dans back
    }
    savePromotion(promotion: any) {
        return this.http.post('http://localhost:8080/promotions/', promotion); // on est en post et on passe le parametr produit
    }
}
