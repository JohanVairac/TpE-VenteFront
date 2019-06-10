import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerpersonneComponent } from './listerpersonne.component';

describe('ListerpersonneComponent', () => {
  let component: ListerpersonneComponent;
  let fixture: ComponentFixture<ListerpersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerpersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerpersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
