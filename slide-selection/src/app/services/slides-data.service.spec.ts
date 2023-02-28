import { TestBed } from '@angular/core/testing';
import {httpclient} from '@angular/common/http';

import { SlidesDataService } from './slides-data.service';

describe('SlidesDataService', () => {
  let service: SlidesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlidesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
