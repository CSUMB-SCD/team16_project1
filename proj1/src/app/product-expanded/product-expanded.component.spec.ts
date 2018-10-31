import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExpandedComponent } from './product-expanded.component';

describe('ProductExpandedComponent', () => {
  let component: ProductExpandedComponent;
  let fixture: ComponentFixture<ProductExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
