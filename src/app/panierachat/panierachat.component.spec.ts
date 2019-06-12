import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierachatComponent } from './panierachat.component';

describe('PanierachatComponent', () => {
  let component: PanierachatComponent;
  let fixture: ComponentFixture<PanierachatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierachatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
