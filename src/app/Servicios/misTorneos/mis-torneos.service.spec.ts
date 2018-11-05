import { TestBed, inject } from '@angular/core/testing';

import { MisTorneosService } from './mis-torneos.service';

describe('MisTorneosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MisTorneosService]
    });
  });

  it('should be created', inject([MisTorneosService], (service: MisTorneosService) => {
    expect(service).toBeTruthy();
  }));
});
