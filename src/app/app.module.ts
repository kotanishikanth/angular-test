import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirebaseDbService } from './firebase-db.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebase = {
        apiKey: 'AIzaSyAaZ-zHSb8EcrEjeq3D3o1YAAQKeqAuUR8',
        authDomain: 'test-e264c.firebaseapp.com',
        databaseURL: 'https://test-e264c.firebaseio.com',
        projectId: 'test-e264c',
        storageBucket: 'test-e264c.appspot.com',
        messagingSenderId: '763399536402'
    }

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(firebase, 'fcc-book-trading'),
    AngularFireDatabaseModule
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FirebaseDbService]
})
export class AppModule { }
