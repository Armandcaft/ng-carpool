import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeVehiculeComponent } from './create-type-vehicule.component';

describe('CreateTypeVehiculeComponent', () => {
  let component: CreateTypeVehiculeComponent;
  let fixture: ComponentFixture<CreateTypeVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeVehiculeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTypeVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
