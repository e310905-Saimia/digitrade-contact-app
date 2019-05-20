import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';


@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContactName: string;

  constructor(private contactService: ContactService) {
    this.contacts = [];
    this.selectedContactName = '';
  }

  onContactSeleced(contact: Contact): void {
   this.selectedContactName = contact.firstName + ' ' + contact.lastName;
   alert(contact.firstName + ' ' + contact.lastName + ' ' + contact.phone);
  }

  ngOnInit() {
    this.contacts = this.contactService.get();
    console.log(this.contacts);
  }

}