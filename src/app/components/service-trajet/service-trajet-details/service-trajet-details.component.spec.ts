import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTrajetDetailsComponent } from './service-trajet-details.component';

describe('ServiceTrajetDetailsComponent', () => {
  let component: ServiceTrajetDetailsComponent;
  let fixture: ComponentFixture<ServiceTrajetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTrajetDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTrajetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
