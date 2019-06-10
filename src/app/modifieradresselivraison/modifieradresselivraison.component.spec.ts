import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieradresselivraisonComponent } from './modifieradresselivraison.component';

describe('ModifieradresselivraisonComponent', () => {
  let component: ModifieradresselivraisonComponent;
  let fixture: ComponentFixture<ModifieradresselivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieradresselivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieradresselivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
