import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YsyprobamosAboutComponent } from './ysyprobamos-about.component';

describe('YsyprobamosAboutComponent', () => {
  let component: YsyprobamosAboutComponent;
  let fixture: ComponentFixture<YsyprobamosAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YsyprobamosAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YsyprobamosAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
