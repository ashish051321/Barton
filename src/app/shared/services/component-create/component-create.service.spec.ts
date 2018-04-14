import { TestBed, inject } from '@angular/core/testing';

import { ComponentCreateService } from './component-create.service';

describe('ComponentCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentCreateService]
    });
  });

  it('should be created', inject([ComponentCreateService], (service: ComponentCreateService) => {
    expect(service).toBeTruthy();
  }));
});
