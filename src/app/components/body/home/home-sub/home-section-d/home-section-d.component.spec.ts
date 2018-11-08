import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionDComponent } from './home-section-d.component';

describe('HomeSectionDComponent', () => {
  let component: HomeSectionDComponent;
  let fixture: ComponentFixture<HomeSectionDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
