import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseDbService{
  
  constructor(private firestore: AngularFirestore) {
  }

  create(collectionName, data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection(collectionName)
            .add(data)
            .then(res => {}, err => reject(err));
    });
}

  getAll(collectionName): Observable<any[]>{
    return this.firestore.collection(collectionName).snapshotChanges()
      .pipe(map(x => x.map(a => a.payload.doc.data() )));
  }

}