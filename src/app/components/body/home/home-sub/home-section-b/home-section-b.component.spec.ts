import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionBComponent } from './home-section-b.component';

describe('HomeSectionBComponent', () => {
  let component: HomeSectionBComponent;
  let fixture: ComponentFixture<HomeSectionBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
