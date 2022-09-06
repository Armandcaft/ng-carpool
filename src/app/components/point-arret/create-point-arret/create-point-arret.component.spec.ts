import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePointArretComponent } from './create-point-arret.component';

describe('CreatePointArretComponent', () => {
  let component: CreatePointArretComponent;
  let fixture: ComponentFixture<CreatePointArretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePointArretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePointArretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
