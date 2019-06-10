import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteradressefacturationComponent } from './ajouteradressefacturation.component';

describe('AjouteradressefacturationComponent', () => {
  let component: AjouteradressefacturationComponent;
  let fixture: ComponentFixture<AjouteradressefacturationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteradressefacturationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteradressefacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
