import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeVehiculeListComponent } from './type-vehicule-list.component';

describe('TypeVehiculeListComponent', () => {
  let component: TypeVehiculeListComponent;
  let fixture: ComponentFixture<TypeVehiculeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeVehiculeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeVehiculeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
