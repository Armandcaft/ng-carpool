import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointArretDetailsComponent } from './point-arret-details.component';

describe('PointArretDetailsComponent', () => {
  let component: PointArretDetailsComponent;
  let fixture: ComponentFixture<PointArretDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointArretDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointArretDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
