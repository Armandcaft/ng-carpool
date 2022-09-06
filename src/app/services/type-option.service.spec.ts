import { TestBed } from '@angular/core/testing';

import { TypeOptionService } from './type-option.service';

describe('TypeOptionService', () => {
  let service: TypeOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
