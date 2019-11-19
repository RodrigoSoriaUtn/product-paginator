import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListOptionsSelectorComponent } from './product-list-options-selector.component';

describe('ProductListOptionsSelectorComponent', () => {
  let component: ProductListOptionsSelectorComponent;
  let fixture: ComponentFixture<ProductListOptionsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListOptionsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListOptionsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
