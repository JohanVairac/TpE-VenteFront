import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-listermoyendepaiement',
  templateUrl: './listermoyendepaiement.component.html',
  styleUrls: ['./listermoyendepaiement.component.css']
})
export class ListermoyendepaiementComponent implements OnInit {

   pageMoyensdePaiment: any;
    constructor(private service: ProduitService, private router: Router) { }

  ngOnInit() {
      this.service.getProduit()
        .subscribe(data => {
            this.pageMoyensdePaiment = data;
        }, err => {
            console.log(err);

        });

}
