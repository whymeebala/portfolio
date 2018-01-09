import { TestBed, inject } from '@angular/core/testing';

import { AlljsondataService } from './alljsondata.service';

describe('AlljsondataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlljsondataService]
    });
  });

  it('should be created', inject([AlljsondataService], (service: AlljsondataService) => {
    expect(service).toBeTruthy();
  }));
});
