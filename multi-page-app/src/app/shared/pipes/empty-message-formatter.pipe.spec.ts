import { EmptyMessageFormatterPipe } from "./empty-message-formatter.pipe";

describe('EmptyMessageFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new EmptyMessageFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
