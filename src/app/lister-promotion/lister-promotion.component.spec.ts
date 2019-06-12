import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerPromotionComponent } from './lister-promotion.component';

describe('ListerPromotionComponent', () => {
  let component: ListerPromotionComponent;
  let fixture: ComponentFixture<ListerPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
