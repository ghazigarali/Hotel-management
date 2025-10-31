import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChambres } from './list-chambres';

describe('ListChambres', () => {
  let component: ListChambres;
  let fixture: ComponentFixture<ListChambres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListChambres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChambres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
