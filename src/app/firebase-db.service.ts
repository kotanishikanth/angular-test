import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export class Book{
  name:string;
}

@Injectable()
export class FirebaseDbService {
  public books: FirebaseListObservable<Book[]>;
  constructor(db: AngularFireDatabase) {
      this.books = db.list('/books');
  }

}