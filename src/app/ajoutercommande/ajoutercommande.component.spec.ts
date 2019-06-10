import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercommandeComponent } from './ajoutercommande.component';

describe('AjoutercommandeComponent', () => {
  let component: AjoutercommandeComponent;
  let fixture: ComponentFixture<AjoutercommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutercommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutercommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
