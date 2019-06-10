import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerproduitComponent } from './listerproduit.component';

describe('ListerproduitComponent', () => {
  let component: ListerproduitComponent;
  let fixture: ComponentFixture<ListerproduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerproduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
