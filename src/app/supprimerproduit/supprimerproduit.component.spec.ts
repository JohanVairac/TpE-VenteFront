import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerproduitComponent } from './supprimerproduit.component';

describe('SupprimerproduitComponent', () => {
  let component: SupprimerproduitComponent;
  let fixture: ComponentFixture<SupprimerproduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerproduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
