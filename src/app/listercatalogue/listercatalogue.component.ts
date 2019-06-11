// import { Component, OnInit } from '@angular/core';
// import { CatalogueService } from '../catalogue.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-listercatalogue',
//   templateUrl: './listercatalogue.component.html',
//   styleUrls: ['./listercatalogue.component.css']
// })
// export class ListercatalogueComponent implements OnInit {

//   pageCatalogues: any; // any type angular qui veut dire on peut mettre n'importe quoi
//     constructor(private service: CatalogueService, private router: Router) { }

//     ngOnInit() { // ngoninit signifie on demarre de la
//         // angular fait du remplissage asynchrone cad
//         this.service.getCatalogues()
//             .subscribe(data => {
//                 this.pageCatalogues = data;
//             }, err => {
//                 console.log(err);
//             });
//     }
//     deleteProduit(id: number) {
//         this.service.deleteProduit(id)
//             .subscribe(data => this.ngOnInit());
//     }

// }
