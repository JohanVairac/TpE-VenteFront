import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeradministrateurComponent } from './listeradministrateur.component';

describe('ListeradministrateurComponent', () => {
  let component: ListeradministrateurComponent;
  let fixture: ComponentFixture<ListeradministrateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeradministrateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeradministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
