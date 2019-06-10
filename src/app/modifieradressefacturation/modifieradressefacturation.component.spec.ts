import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieradressefacturationComponent } from './modifieradressefacturation.component';

describe('ModifieradressefacturationComponent', () => {
  let component: ModifieradressefacturationComponent;
  let fixture: ComponentFixture<ModifieradressefacturationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieradressefacturationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieradressefacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
