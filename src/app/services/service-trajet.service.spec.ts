import { TestBed } from '@angular/core/testing';

import { ServiceTrajetService } from './service-trajet.service';

describe('ServiceTrajetService', () => {
  let service: ServiceTrajetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTrajetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
