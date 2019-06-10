import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierpersonneComponent } from './modifierpersonne.component';

describe('ModifierpersonneComponent', () => {
  let component: ModifierpersonneComponent;
  let fixture: ComponentFixture<ModifierpersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierpersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierpersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
