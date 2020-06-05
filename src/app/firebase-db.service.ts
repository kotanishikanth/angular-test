import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

export class Book{
  name:string;
}

@Injectable()
export class FirebaseDbService {
  public books: AngularFireList<Book[]>;

  constructor(db: AngularFireDatabase) {
      this.books = db.list('/books');
  }

  getBooks():any[]{
    return [{name: 'One'}, {name:'Two'}];
  }

}