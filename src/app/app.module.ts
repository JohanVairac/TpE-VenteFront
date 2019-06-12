import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterpersonneComponent } from './ajouterpersonne/ajouterpersonne.component';
import { ModifierpersonneComponent } from './modifierpersonne/modifierpersonne.component';
import { SupprimerpersonneComponent } from './supprimerpersonne/supprimerpersonne.component';
import { AjouterproduitComponent } from './ajouterproduit/ajouterproduit.component';
import { ModifierproduitComponent } from './modifierproduit/modifierproduit.component';
import { SupprimerproduitComponent } from './supprimerproduit/supprimerproduit.component';
import { AjoutercommandeComponent } from './ajoutercommande/ajoutercommande.component';
import { ModifiercommandeComponent } from './modifiercommande/modifiercommande.component';
import { SupprimercommandeComponent } from './supprimercommande/supprimercommande.component';
import { AjouterclientComponent } from './ajouterclient/ajouterclient.component';
import { ModifierclientComponent } from './modifierclient/modifierclient.component';
import { ListerclientComponent } from './listerclient/listerclient.component';
import { ListercommandeComponent } from './listercommande/listercommande.component';
import { ListerpersonneComponent } from './listerpersonne/listerpersonne.component';
import { ListerproduitComponent } from './listerproduit/listerproduit.component';
import { AjouteradministrateurComponent } from './ajouteradministrateur/ajouteradministrateur.component';
import { ListeradministrateurComponent } from './listeradministrateur/listeradministrateur.component';
import { AjouteradressefacturationComponent } from './ajouteradressefacturation/ajouteradressefacturation.component';
import { ModifieradressefacturationComponent } from './modifieradressefacturation/modifieradressefacturation.component';
import { ListeradressefacturationComponent } from './listeradressefacturation/listeradressefacturation.component';
import { ListeradresselivraisonComponent } from './listeradresselivraison/listeradresselivraison.component';
import { AjouteradresselivraisonComponent } from './ajouteradresselivraison/ajouteradresselivraison.component';
import { ModifieradresselivraisonComponent } from './modifieradresselivraison/modifieradresselivraison.component';
import { AjoutermoyendepaiementComponent } from './ajoutermoyendepaiement/ajoutermoyendepaiement.component';
import { ListermoyendepaiementComponent } from './listermoyendepaiement/listermoyendepaiement.component';
import { ListercatalogueComponent } from './listercatalogue/listercatalogue.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Routes } from '@angular/router';
import { PanierachatComponent } from './panierachat/panierachat.component';
import { ProduitComponent } from './produit/produit.component';
import { CommandeComponent } from './commande/commande.component';


const appRoutes: Routes = [
    { path: 'listerCatalogue', component: ListercatalogueComponent },

    { path: 'listerProduit', component: ListerproduitComponent },
    {
        path: '',
        redirectTo: 'listerProduit',
        pathMatch: 'full'
    }
];
@NgModule({
  declarations: [
    AppComponent,
    AjouterpersonneComponent,
    ModifierpersonneComponent,
    SupprimerpersonneComponent,
    AjouterproduitComponent,
    ModifierproduitComponent,
    SupprimerproduitComponent,
    AjoutercommandeComponent,
    ModifiercommandeComponent,
    SupprimercommandeComponent,
    AjouterclientComponent,
    ModifierclientComponent,
    ListerclientComponent,
    ListercommandeComponent,
    ListerpersonneComponent,
    ListerproduitComponent,
    AjouteradministrateurComponent,
    ListeradministrateurComponent,
    AjouteradressefacturationComponent,
    ModifieradressefacturationComponent,
    ListeradressefacturationComponent,
    ListeradresselivraisonComponent,
    AjouteradresselivraisonComponent,
    ModifieradresselivraisonComponent,
    AjoutermoyendepaiementComponent,
    ListermoyendepaiementComponent,
    ListercatalogueComponent,
    PanierachatComponent,
    ProduitComponent,
    CommandeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
