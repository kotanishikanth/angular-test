
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const firebase = {
        apiKey: 'AIzaSyAaZ-zHSb8EcrEjeq3D3o1YAAQKeqAuUR8',
        authDomain: 'test-e264c.firebaseapp.com',
        databaseURL: 'https://test-e264c.firebaseio.com',
        projectId: 'test-e264c',
        storageBucket: 'test-e264c.appspot.com',
        messagingSenderId: '75508826624'
    };

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebase, 'test-e264c'),
        AngularFireDatabaseModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }