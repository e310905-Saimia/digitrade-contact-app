import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';


@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  onContactSeleced(contact: Contact): void {
    console.log(contact);
    alert(contact);
  }

  ngOnInit() {
    this.contacts = [
      new Contact('Aku', 'Ankka', '313'),
      new Contact('Roope', 'Ankka', '999'),
      new Contact('Taavi', 'Ankka', '000')
    ];

    this.contacts.push(new Contact('Hannu', 'Hanhi', '123123'))
    console.log(this.contacts);
  }

}
