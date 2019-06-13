import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListerproduitComponent } from './listerproduit/listerproduit.component';
import { ListercatalogueComponent } from './listercatalogue/listercatalogue.component';
import { ListerPromotionComponent } from './lister-promotion/lister-promotion.component';
import { ListerclientComponent } from './listerclient/listerclient.component';
import { AjouterclientComponent } from './ajouterclient/ajouterclient.component';
import { ListermoyendepaiementComponent } from './listermoyendepaiement/listermoyendepaiement.component';
import { ListercommandeComponent } from './listercommande/listercommande.component';

const routes: Routes = [
 {path: 'listerProduit', component: ListerproduitComponent},
{path: 'listerCatalogue', component: ListercatalogueComponent},
{path: 'listerPromotion', component: ListerPromotionComponent},
{path: 'ajouterclient', component: AjouterclientComponent},
{path: 'listerclient', component: ListerclientComponent},
{path: 'listermoyendepaiement', component: ListermoyendepaiementComponent},
{path: 'listercommande', component: ListercommandeComponent},

  {
        path: '',
        redirectTo: 'listerProduit',
        pathMatch: 'full'
	}
	];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
