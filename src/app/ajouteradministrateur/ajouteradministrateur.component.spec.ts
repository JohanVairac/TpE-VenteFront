import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteradministrateurComponent } from './ajouteradministrateur.component';

describe('AjouteradministrateurComponent', () => {
  let component: AjouteradministrateurComponent;
  let fixture: ComponentFixture<AjouteradministrateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteradministrateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteradministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
