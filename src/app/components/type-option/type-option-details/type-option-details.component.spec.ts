import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOptionDetailsComponent } from './type-option-details.component';

describe('TypeOptionDetailsComponent', () => {
  let component: TypeOptionDetailsComponent;
  let fixture: ComponentFixture<TypeOptionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOptionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
