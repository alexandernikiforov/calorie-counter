import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumedFoodListComponent } from './consumed-food-list.component';

describe('ConsumedFoodListComponent', () => {
  let component: ConsumedFoodListComponent;
  let fixture: ComponentFixture<ConsumedFoodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumedFoodListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumedFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
