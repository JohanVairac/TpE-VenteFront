import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../promotion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lister-promotion',
  templateUrl: './lister-promotion.component.html',
  styleUrls: ['./lister-promotion.component.css']
})
export class ListerPromotionComponent implements OnInit {
	pagePromotions: any;
 	
  constructor(private service: PromotionService , private router: Router) { }

  ngOnInit() {
	   this.service.getPromotion()
        .subscribe(data => {
            this.pagePromotions = data;
        }, err => {
            console.log(err);
        });
  }

}
