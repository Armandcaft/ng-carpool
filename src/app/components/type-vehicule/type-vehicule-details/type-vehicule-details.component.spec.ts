import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeVehiculeDetailsComponent } from './type-vehicule-details.component';

describe('TypeVehiculeDetailsComponent', () => {
  let component: TypeVehiculeDetailsComponent;
  let fixture: ComponentFixture<TypeVehiculeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeVehiculeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeVehiculeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
