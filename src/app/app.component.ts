import { Component, VERSION } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { FirebaseDbService } from './firebase-db.service';

import {Book} from './firebase-db'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  books: Book[];

  constructor(private firebaseDbService: FirebaseDbService) {
      

      this.firebaseDbService.getBooks() // .payload.doc.data().name
      .pipe(map(x => x.map(a => new Book(a) )))
        .subscribe(data => {
        console.log('Books');
        console.log(data);
        this.books = data
      });
  }
}


