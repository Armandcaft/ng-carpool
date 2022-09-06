import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeOptionComponent } from './create-type-option.component';

describe('CreateTypeOptionComponent', () => {
  let component: CreateTypeOptionComponent;
  let fixture: ComponentFixture<CreateTypeOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTypeOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
