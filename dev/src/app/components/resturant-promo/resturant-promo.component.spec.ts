import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantPromoComponent } from './resturant-promo.component';

describe('ResturantPromoComponent', () => {
  let component: ResturantPromoComponent;
  let fixture: ComponentFixture<ResturantPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
