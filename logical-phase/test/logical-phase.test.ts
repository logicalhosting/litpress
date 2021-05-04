import { html, fixture, expect } from '@open-wc/testing';

import { LogicalPhase } from '../src/LogicalPhase.js';
import '../src/logical-phase.js';

describe('LogicalPhase', () => {
  let element: LogicalPhase;
  beforeEach(async () => {
    element = await fixture(html`<logical-phase></logical-phase>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
