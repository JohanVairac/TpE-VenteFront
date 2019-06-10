import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeradressefacturationComponent } from './listeradressefacturation.component';

describe('ListeradressefacturationComponent', () => {
  let component: ListeradressefacturationComponent;
  let fixture: ComponentFixture<ListeradressefacturationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeradressefacturationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeradressefacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
