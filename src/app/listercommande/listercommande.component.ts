import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listercommande',
  templateUrl: './listercommande.component.html',
  styleUrls: ['./listercommande.component.css']
})
export class ListercommandeComponent implements OnInit {

	 pageCommandes: any;
  constructor(private service: EcommerceService , private router: Router) { }

  ngOnInit() {
	   this.service.getCommandes()
        .subscribe(data => {
            this.pageCommandes = data;
        }, err => {
            console.log(err);
        });
  }

}
