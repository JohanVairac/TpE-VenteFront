import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListercatalogueComponent } from './listercatalogue.component';

describe('ListercatalogueComponent', () => {
  let component: ListercatalogueComponent;
  let fixture: ComponentFixture<ListercatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListercatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListercatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
