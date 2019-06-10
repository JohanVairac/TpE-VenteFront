import { TestBed } from '@angular/core/testing';

import { MoyendepaiementService } from './moyendepaiement.service';

describe('MoyendepaiementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoyendepaiementService = TestBed.get(MoyendepaiementService);
    expect(service).toBeTruthy();
  });
});
