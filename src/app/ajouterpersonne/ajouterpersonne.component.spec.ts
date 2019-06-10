import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterpersonneComponent } from './ajouterpersonne.component';

describe('AjouterpersonneComponent', () => {
  let component: AjouterpersonneComponent;
  let fixture: ComponentFixture<AjouterpersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterpersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterpersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
