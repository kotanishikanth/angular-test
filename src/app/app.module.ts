
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {FirebaseDbService} from './firebase-db.service'
import {Book} from './firebase-db';
import { ModalComponent } from './modal/modal.component'

const firebase = {
        apiKey: "AIzaSyAaZ-zHSb8EcrEjeq3D3o1YAAQKeqAuUR8",
        authDomain: "test-e264c.firebaseapp.com",
        databaseURL: "https://test-e264c.firebaseio.com",
        projectId: "test-e264c",
        storageBucket: "test-e264c.appspot.com",
        messagingSenderId: "75508826624",
        appId: "1:75508826624:web:eb2a4372e1312065774ee5"
    };

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        ModalComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebase ),
        AngularFirestoreModule
    ],
    providers: [FirebaseDbService],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule { }