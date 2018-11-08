import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionEComponent } from './home-section-e.component';

describe('HomeSectionEComponent', () => {
  let component: HomeSectionEComponent;
  let fixture: ComponentFixture<HomeSectionEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
