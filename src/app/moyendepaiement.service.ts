import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoyendepaiementService {

  constructor(private http: HttpClient) { }

   getMoyenDePaiment() {
       return this.http.get ('http://localhost:8080/moyenDePaiments');
   }
  saveMoyenDePaiment(moy: any) {
      return this.http.post('http://localhost:8080/moyenDePaiments/', moy);
  }
}
