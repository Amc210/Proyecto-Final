import { TwitchUrlPipe } from './twitch-url.pipe';

describe('TwitchUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new TwitchUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
