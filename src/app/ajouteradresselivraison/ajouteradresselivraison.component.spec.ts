import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteradresselivraisonComponent } from './ajouteradresselivraison.component';

describe('AjouteradresselivraisonComponent', () => {
  let component: AjouteradresselivraisonComponent;
  let fixture: ComponentFixture<AjouteradresselivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteradresselivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteradresselivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
