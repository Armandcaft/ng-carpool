import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceTrajetComponent } from './update-service-trajet.component';

describe('UpdateServiceTrajetComponent', () => {
  let component: UpdateServiceTrajetComponent;
  let fixture: ComponentFixture<UpdateServiceTrajetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateServiceTrajetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateServiceTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
