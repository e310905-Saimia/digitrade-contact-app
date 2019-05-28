import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {ToolbarService} from '../../layout/toolbar/toolbar.service';
import {ToolbarAction} from '../../layout/toolbar/toolbar-action';
import {ToolbarOptions} from '../../layout/toolbar/toolbar-options';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'dtca-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  contactId: any;
  editingEnabled: boolean;


  constructor(public snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute,
              private contactService: ContactService, private toolbar: ToolbarService) {
    this.contact = new Contact();
  }

  ngOnInit() {
    this.contactId = this.route.snapshot.paramMap.get('id');
    console.log('onInit:'+ this.contactId);
    let toolbarActions: ToolbarAction[];

    console.log(this.contactId);
    if (this.contactId == null) {
      // Create contact
      this.editingEnabled = true;
      toolbarActions = [];
    } else {
      // View/Edit contact
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];

      this.contactService.getContactById(this.contactId).subscribe(response => {
        this.contact = response;
        console.log(this.contact);
      }, error => {
        console.error('Getting contact failed!');
        console.error(error);
        this.router.navigate(['/contacts']);
      });
    }

    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));
  }


  onEdit() {
    let toolbarActions: ToolbarAction[];
    this.editingEnabled = !this.editingEnabled;
    if (this.editingEnabled === true) {
      // Edit mode on
      console.log('Edit mode enabled');
      toolbarActions = [
        new ToolbarAction(this.onDelete.bind(this), 'delete'),
        new ToolbarAction(this.onEdit.bind(this), 'edit')
      ];
    } else {
      // Edit mode off
      console.log('Edit mode disabled');
      toolbarActions = [new ToolbarAction(this.onEdit.bind(this), 'edit')];
    }
    this.toolbar.setToolbarOptions(new ToolbarOptions(true, 'Contact', toolbarActions));
  }

  onDelete() {
    this.editingEnabled = false;
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }


  onSave(): void {
    if (this.contactId == null) {
      // Create contact
      this.editingEnabled = false;
      this.contactService.createContact(this.contact).subscribe(response => {
        console.log(response);
        this.router.navigate(['/contacts']);
        this.snackBar.open('Contact created!', 'Ok', {
          duration: 3000
        });
      });
    } else {
      // Edit contact
      this.editingEnabled = false;
      this.contactService.updateContact(this.contact).subscribe(response => {
        this.contact = response;
        this.snackBar.open('Contact modified!', 'Ok', {
          duration: 3000
        });
      });
    }
  }
}

