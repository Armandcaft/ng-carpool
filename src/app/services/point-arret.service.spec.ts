import { TestBed } from '@angular/core/testing';

import { PointArretService } from './point-arret.service';

describe('PointArretService', () => {
  let service: PointArretService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointArretService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
