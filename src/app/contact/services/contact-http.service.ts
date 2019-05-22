import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../contact';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/contacts';
    // this.url = environment.endpointUrl + '/contacts';
  }

  /*
  get() {
    return this.http
      .get(this.url)
      .subscribe((data) => {
        console.log('http')
        console.log(data);
      });
  }
*/
  get(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url)
      .pipe(
        map(contacts => {
          return contacts as Contact[];
        })
      );
  }

}
