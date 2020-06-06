import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class FirebaseDbService {
  
  constructor(private firestore: AngularFirestore) {
  }

  getBooks(){
    return this.firestore.collection("books").snapshotChanges()
      .pipe(map(x => x.map(a => a.payload.doc.data()['name'])));
  }

}