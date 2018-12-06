import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySectionBComponent } from './gallery-section-b.component';

describe('GallerySectionBComponent', () => {
  let component: GallerySectionBComponent;
  let fixture: ComponentFixture<GallerySectionBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySectionBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySectionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
