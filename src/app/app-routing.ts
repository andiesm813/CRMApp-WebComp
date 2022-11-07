import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './home/home';
import './accounts/accounts';
import './account-sample/account-sample';
import './account-sample-old/account-sample-old';

export const routes: Route[] = [
  { path: '', component: 'app-home', name: 'Home' },
  { path: 'home', component: 'app-home', name: 'Home' },
  { path: 'accounts', component: 'app-accounts', name: 'Accounts' },
  { path: 'account-sample', component: 'app-account-sample', name: 'Account Sample' },
  { path: 'account-sample-old', component: 'app-account-sample-old', name: 'Account Sample-OLD' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
