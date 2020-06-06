import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseDbService{
  
  constructor(private firestore: AngularFirestore) {
  }

  getBooks(): Observable<any[]>{
    return this.firestore.collection("books").snapshotChanges()
      .pipe(map(x => x.map(a => a.payload.doc.data() )));
  }

}