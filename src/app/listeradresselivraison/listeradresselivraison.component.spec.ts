import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeradresselivraisonComponent } from './listeradresselivraison.component';

describe('ListeradresselivraisonComponent', () => {
  let component: ListeradresselivraisonComponent;
  let fixture: ComponentFixture<ListeradresselivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeradresselivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeradresselivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
