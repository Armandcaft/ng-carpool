import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrajetComponent } from './create-trajet.component';

describe('CreateTrajetComponent', () => {
  let component: CreateTrajetComponent;
  let fixture: ComponentFixture<CreateTrajetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTrajetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
