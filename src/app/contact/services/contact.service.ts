import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor(private contactHttpService: ContactHttpService) {
    /* this.contacts = [
      new Contact('Aku', 'Ankka', '313'),
      new Contact('Roope', 'Ankka', '999'),
      new Contact('Taavi', 'Ankka', '000')
    ];

    this.contacts.push(new Contact('Hannu', 'Hanhi', '123123'));
     */
  }

  /* get(): Contact[] {
    console.log('service');
    console.log (this.contactHttpService.get());
    return [];
  }
   */
  get(): Observable<Contact[]> {
    // return this.contacts;
    return this.contactHttpService.get();
  }

  getContactById(id): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }

  updateContact(contact): Observable<Contact> {
    return this.contactHttpService.put(contact);
  }

  createContact(contact): Observable<Contact> {
    return this.contactHttpService.post(contact);
  }

  deleteContact(contact): Observable<any> {
    return this.contactHttpService.delete(contact);
  }
}
