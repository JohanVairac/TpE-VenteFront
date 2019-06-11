import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListerproduitComponent } from './listerproduit/listerproduit.component';
import { ListercatalogueComponent } from './listercatalogue/listercatalogue.component';

const routes: Routes = [
{path: 'listerProduit', component: ListerproduitComponent},
{path: 'listerCatalogue', component: ListercatalogueComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
