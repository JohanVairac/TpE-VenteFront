import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermoyendepaiementComponent } from './ajoutermoyendepaiement.component';

describe('AjoutermoyendepaiementComponent', () => {
  let component: AjoutermoyendepaiementComponent;
  let fixture: ComponentFixture<AjoutermoyendepaiementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutermoyendepaiementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutermoyendepaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
