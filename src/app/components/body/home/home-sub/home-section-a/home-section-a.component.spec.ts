import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionAComponent } from './home-section-a.component';

describe('HomeSectionAComponent', () => {
  let component: HomeSectionAComponent;
  let fixture: ComponentFixture<HomeSectionAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
