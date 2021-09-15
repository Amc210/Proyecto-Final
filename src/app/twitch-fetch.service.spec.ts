import { TestBed } from '@angular/core/testing';

import { TwitchFetchService } from './twitch-fetch.service';

describe('TwitchFetchService', () => {
  let service: TwitchFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitchFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
