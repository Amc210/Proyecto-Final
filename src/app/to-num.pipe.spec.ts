import { ToNumPipe } from './to-num.pipe';

describe('ToNumPipe', () => {
  it('create an instance', () => {
    const pipe = new ToNumPipe();
    expect(pipe).toBeTruthy();
  });
});
