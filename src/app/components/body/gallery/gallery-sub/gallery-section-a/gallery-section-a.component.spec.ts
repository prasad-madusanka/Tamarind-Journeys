import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySectionAComponent } from './gallery-section-a.component';

describe('GallerySectionAComponent', () => {
  let component: GallerySectionAComponent;
  let fixture: ComponentFixture<GallerySectionAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySectionAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySectionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
