import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryNavigationComponent } from './diary-navigation.component';

describe('NavigationComponent', () => {
  let component: DiaryNavigationComponent;
  let fixture: ComponentFixture<DiaryNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiaryNavigationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
