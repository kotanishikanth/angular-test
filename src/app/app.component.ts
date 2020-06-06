import { Component, VERSION } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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
      var x = this.firestore.collection("books");
      //console.log(x);
      // return ;
      //var x = this.firestore.collection('books');
      /*
      this.firestore.collection("books").snapshotChanges()
        .subscribe(data => {
        console.log('Books');
        console.log(data);
        this.books = data
      });*/

      this.firestore.collection("books").snapshotChanges()
      .pipe(map(x => x.map(a => a.payload.doc.data()['name']))) // .payload.doc.data().name
        .subscribe(data => {
        console.log('Books2');
        console.log(data);
        this.books = data
      });
  }
}


