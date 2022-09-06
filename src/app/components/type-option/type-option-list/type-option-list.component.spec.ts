import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOptionListComponent } from './type-option-list.component';

describe('TypeOptionListComponent', () => {
  let component: TypeOptionListComponent;
  let fixture: ComponentFixture<TypeOptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
