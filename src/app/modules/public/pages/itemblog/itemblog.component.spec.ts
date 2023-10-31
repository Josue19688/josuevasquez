import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemblogComponent } from './itemblog.component';

describe('ItemblogComponent', () => {
  let component: ItemblogComponent;
  let fixture: ComponentFixture<ItemblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemblogComponent]
    });
    fixture = TestBed.createComponent(ItemblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
