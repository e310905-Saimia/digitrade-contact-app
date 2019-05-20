import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactHttpService} from './contact-http.service';

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

  get(): Contact[] {
    // return this.contacts;
    console.log(this.contactHttpService.get());
    return [];
  }
}
