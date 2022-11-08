import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './home/home';
import './accounts/accounts';
import './account-sample/account-sample';
import './contacts/contacts';
import './contracts/contracts';
import './reports/reports';

export const routes: Route[] = [
  { path: 'home', component: 'app-home', name: 'Home' },
  { path: 'accounts', component: 'app-accounts', name: 'Accounts' },
  { path: 'account-sample', component: 'app-account-sample', name: 'Account Sample' },
  { path: 'contacts', component: 'app-contacts', name: 'Contacts' },
  { path: 'contracts', component: 'app-contracts', name: 'Contracts' },
  { path: 'reports', component: 'app-reports', name: 'Reports' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
