import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySectionCComponent } from './gallery-section-c.component';

describe('GallerySectionCComponent', () => {
  let component: GallerySectionCComponent;
  let fixture: ComponentFixture<GallerySectionCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySectionCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySectionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
