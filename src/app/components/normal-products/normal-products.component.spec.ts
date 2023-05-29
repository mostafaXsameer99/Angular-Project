import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalProductsComponent } from './normal-products.component';

describe('NormalProductsComponent', () => {
  let component: NormalProductsComponent;
  let fixture: ComponentFixture<NormalProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalProductsComponent]
    });
    fixture = TestBed.createComponent(NormalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
