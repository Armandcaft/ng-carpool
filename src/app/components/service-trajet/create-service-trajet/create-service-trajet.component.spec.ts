import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceTrajetComponent } from './create-service-trajet.component';

describe('CreateServiceTrajetComponent', () => {
  let component: CreateServiceTrajetComponent;
  let fixture: ComponentFixture<CreateServiceTrajetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateServiceTrajetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateServiceTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
