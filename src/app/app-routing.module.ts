import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListerproduitComponent } from './listerproduit/listerproduit.component';
import { ListercatalogueComponent } from './listercatalogue/listercatalogue.component';

const routes: Routes = [
{path: 'listerproduit', component: ListerproduitComponent},
{path: 'listercatalogue', component: ListercatalogueComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
