import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimercommandeComponent } from './supprimercommande.component';

describe('SupprimercommandeComponent', () => {
  let component: SupprimercommandeComponent;
  let fixture: ComponentFixture<SupprimercommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimercommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimercommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
