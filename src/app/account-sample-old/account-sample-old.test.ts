import { expect } from '@open-wc/testing';
import AccountSampleOLD from './account-sample-old.js';

describe('AccountSampleOLD', () => {
  it('<app-account-sample-old> is an instance of AccountSampleOLD', async () => {
    const element = document.createElement('app-account-sample-old');
    expect(element).to.be.instanceOf(AccountSampleOLD);
  });
});
