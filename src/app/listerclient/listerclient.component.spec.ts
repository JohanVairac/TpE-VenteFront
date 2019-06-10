import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerclientComponent } from './listerclient.component';

describe('ListerclientComponent', () => {
  let component: ListerclientComponent;
  let fixture: ComponentFixture<ListerclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
