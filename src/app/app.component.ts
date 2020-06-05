import { Component, VERSION } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';


class Book {
    constructor(public title) { }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  books: any[];

  constructor(private firestore: AngularFirestore) {

      this.books =this.firestore.collection("books").snapshotChanges();
  }
}

