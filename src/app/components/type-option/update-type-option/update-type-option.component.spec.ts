import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeOptionComponent } from './update-type-option.component';

describe('UpdateTypeOptionComponent', () => {
  let component: UpdateTypeOptionComponent;
  let fixture: ComponentFixture<UpdateTypeOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTypeOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
