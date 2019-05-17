import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list',
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
      new Contact('Aku', 'Ankka'),
      new Contact('Roope', 'Ankka'),
      new Contact('Taavi', 'Ankka')
    ];
    console.log(this.contacts);
  }

}
