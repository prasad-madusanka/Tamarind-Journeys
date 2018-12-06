import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySectionDComponent } from './gallery-section-d.component';

describe('GallerySectionDComponent', () => {
  let component: GallerySectionDComponent;
  let fixture: ComponentFixture<GallerySectionDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySectionDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySectionDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
