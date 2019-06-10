import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListermoyendepaiementComponent } from './listermoyendepaiement.component';

describe('ListermoyendepaiementComponent', () => {
  let component: ListermoyendepaiementComponent;
  let fixture: ComponentFixture<ListermoyendepaiementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListermoyendepaiementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListermoyendepaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
