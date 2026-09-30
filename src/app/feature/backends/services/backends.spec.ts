import { TestBed } from '@angular/core/testing';
import { Backends } from './backends';

describe('Backends', () => {
  let service: Backends;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Backends);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
