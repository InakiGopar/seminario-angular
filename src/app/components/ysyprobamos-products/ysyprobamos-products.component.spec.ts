import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YsyprobamosProductsComponent } from './ysyprobamos-products.component';

describe('YsyprobamosProductsComponent', () => {
  let component: YsyprobamosProductsComponent;
  let fixture: ComponentFixture<YsyprobamosProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YsyprobamosProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YsyprobamosProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
