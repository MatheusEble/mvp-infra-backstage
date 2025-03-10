import { storybookPlugin } from './plugin';

describe('storybook', () => {
  it('should export plugin', () => {
    expect(storybookPlugin).toBeDefined();
  });
});
