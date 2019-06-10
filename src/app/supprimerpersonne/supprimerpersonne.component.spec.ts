import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerpersonneComponent } from './supprimerpersonne.component';

describe('SupprimerpersonneComponent', () => {
  let component: SupprimerpersonneComponent;
  let fixture: ComponentFixture<SupprimerpersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerpersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerpersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
