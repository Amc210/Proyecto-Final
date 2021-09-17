import { TwitchThumbnailPipe } from './twitch-thumbnail.pipe';

describe('TwitchThumbnailPipe', () => {
  it('create an instance', () => {
    const pipe = new TwitchThumbnailPipe();
    expect(pipe).toBeTruthy();
  });
});
