import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouterproduit',
  templateUrl: './ajouterproduit.component.html',
  styleUrls: ['./ajouterproduit.component.css']
})
export class AjouterproduitComponent {

	 produit = {
       idProduit:0,
        nomProduit:"",
	quantite:0,
	prix:0.0,
     
       
   };

  constructor() { }

  ngOnInit() {
  }

}
