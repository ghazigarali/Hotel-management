import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHotels } from './list-hotels';

describe('ListHotels', () => {
  let component: ListHotels;
  let fixture: ComponentFixture<ListHotels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHotels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHotels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
