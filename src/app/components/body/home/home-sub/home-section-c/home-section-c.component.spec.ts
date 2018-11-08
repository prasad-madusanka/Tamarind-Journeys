import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionCComponent } from './home-section-c.component';

describe('HomeSectionCComponent', () => {
  let component: HomeSectionCComponent;
  let fixture: ComponentFixture<HomeSectionCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
