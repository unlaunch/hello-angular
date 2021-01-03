import { TestBed } from '@angular/core/testing';

import { UnlaunchService } from './unlaunch.service';

describe('UnlaunchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnlaunchService = TestBed.get(UnlaunchService);
    expect(service).toBeTruthy();
  });
});
