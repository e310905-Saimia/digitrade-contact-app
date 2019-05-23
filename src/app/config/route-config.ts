import {Routes} from '@angular/router';
import {ContactListComponent} from '../contact/contact-list/contact-list.component';
import {ContactDetailComponent} from '../contact/contact-detail/contact-detail.component';

export const RouteConfig: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contacts'
  },
  {
    path: 'contacts',
    component: ContactListComponent,
    data: {
      pathName: 'route.contacts',
    }
  },
  {
    path: 'contacts/new',
    component: ContactDetailComponent,
    data: {
      pathName: 'route.contacts.create',
      parentPathName: 'contacts'
    }
  },
  {
    path: 'contacts/:id',
    component: ContactDetailComponent,
    data: {
      pathName: 'route.contacts.edit',
      parentPathName: 'contacts'
    }
  }
];
