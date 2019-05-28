import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {ToolbarService} from '../../layout/toolbar/toolbar.service';
import {ToolbarOptions} from '../../layout/toolbar/toolbar-options';

@Component({
  selector: 'dtca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContactName: string;

  constructor(private contactService: ContactService, private router: Router, private toolbar: ToolbarService) {
    this.contacts = [];
    this.selectedContactName = '';
  }

  onContactSeleced(contact: Contact): void {
    // this.selectedContactName = contact.firstName + ' ' + contact.lastName;
    // alert(contact.firstName + ' ' + contact.lastName + ' ' + contact.phoneNumber);
    console.log(this.router.navigate(['/contacts', contact.id]));
    this.router.navigate(['/contacts', contact.id], {skipLocationChange: true});
  }

  ngOnInit() {
    /*
    this.contacts = this.contactService.get();
    // console.log(this.contacts);
*/
    this.toolbar.setToolbarOptions(new ToolbarOptions(false, 'Contacts - 2019', []));
    this.contactService.get().subscribe((response => {
      this.contacts = response;
    }));
  }

  onCreateNew(): void {
    this.router.navigate(['/contacts/new'], {skipLocationChange: true});
  }
}
