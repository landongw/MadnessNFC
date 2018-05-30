import { TestWindow } from '@stencil/core/testing';
import { MadnessNFC } from './madness-nfc';

describe('madness-nfc', () => {

  it('should update', async () => {
    await window.flush();
  });

  let element: HTMLMadnessNFCElement;
  let window: TestWindow;
  beforeEach(async () => {
    window = new TestWindow();
    element = await window.load({
      components: [MadnessNFC],
      html: '<madness-nfc></madness-nfc>'
    });
  });
});
