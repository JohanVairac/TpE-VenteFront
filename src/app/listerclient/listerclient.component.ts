import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listerclient',
  templateUrl: './listerclient.component.html',
  styleUrls: ['./listerclient.component.css']
})
export class ListerclientComponent implements OnInit {

  pageClients: any;
 	
  constructor(private service: ClientService , private router: Router) { }

  ngOnInit() {
	   this.service.getClients()
        .subscribe(data => {
            this.pageClients = data;
        }, err => {
            console.log(err);
        });
  }


}
