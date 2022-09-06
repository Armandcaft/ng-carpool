import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTrajetListComponent } from './service-trajet-list.component';

describe('ServiceTrajetListComponent', () => {
  let component: ServiceTrajetListComponent;
  let fixture: ComponentFixture<ServiceTrajetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceTrajetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTrajetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
