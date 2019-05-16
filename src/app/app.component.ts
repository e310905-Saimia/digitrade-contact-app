import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Komponentin Otsikko on tässä!';
  message = '';

  onButtonClick() {
    console.log('Moikka');
    this.message = 'Heippa!';
  }
}
