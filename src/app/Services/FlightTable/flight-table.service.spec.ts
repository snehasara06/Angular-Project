import { TestBed } from '@angular/core/testing';

import { FlightTableService } from './flight-table.service';

describe('FlightTableService', () => {
  let service: FlightTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
