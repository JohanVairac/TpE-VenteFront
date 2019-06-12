import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-listerproduit',
  templateUrl: './listerproduit.component.html',
  styleUrls: ['./listerproduit.component.css']
})
export class ListerproduitComponent implements OnInit {

   pageProduits: any;
   
    constructor(private service: ProduitService, private router: Router) { }

  ngOnInit() {
      this.service.getProduit()
        .subscribe(data => {
            this.pageProduits = data;
        }, err => {
            console.log(err);
        });
  }


}
