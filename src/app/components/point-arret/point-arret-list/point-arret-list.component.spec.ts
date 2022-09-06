import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointArretListComponent } from './point-arret-list.component';

describe('PointArretListComponent', () => {
  let component: PointArretListComponent;
  let fixture: ComponentFixture<PointArretListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointArretListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointArretListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
