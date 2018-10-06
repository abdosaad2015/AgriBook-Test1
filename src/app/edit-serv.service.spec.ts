import { TestBed } from '@angular/core/testing';

import { EditServService } from './edit-serv.service';

describe('EditServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditServService = TestBed.get(EditServService);
    expect(service).toBeTruthy();
  });
});
