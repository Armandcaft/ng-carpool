import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePointArretComponent } from './update-point-arret.component';

describe('UpdatePointArretComponent', () => {
  let component: UpdatePointArretComponent;
  let fixture: ComponentFixture<UpdatePointArretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePointArretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePointArretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
