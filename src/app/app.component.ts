import { Component, VERSION } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


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
  public books: FirebaseListObservable<Book[]>;
  constructor(db: AngularFireDatabase) {
      this.books = db.list('/books');
  }
}
