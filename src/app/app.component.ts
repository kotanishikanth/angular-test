import { Component, VERSION } from '@angular/core';
import { FirebaseDbService } from './firebase-db.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  books:any[];

  constructor(private firebaseService:FirebaseDbService){
    this.books = firebaseService.getBooks();
  }
}
