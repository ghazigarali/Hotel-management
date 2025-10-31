import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChambre } from './add-chambre';

describe('AddChambre', () => {
  let component: AddChambre;
  let fixture: ComponentFixture<AddChambre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChambre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChambre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
