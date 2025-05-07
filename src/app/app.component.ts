import { getDatabase, objectVal, ref, set } from '@angular/fire/database';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule, FirebaseApp } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import {
  provideFirestore,
  Timestamp,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {
  getFirestore,
  Firestore,
  collection,
  addDoc,
} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';


import 'firebase/firestore';


// type Post = { caption: string; imageUrl: string };
const app = initializeApp(environment.firebaseConfig);
const db = getFirestore(app);

type mobiles = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '1MMART';
  // product: mobiles[] = [];
  // firestore = firebase.firestore();
  // // db = getFirestore(app);
  // db: AngularFirestore = inject(AngularFirestore);
  // mobileCollection = collection(this.firestore, 'mobiles');
  // constructor() {
  //   this.db
  //     .collection('mobiles')
  //     .valueChanges()
  //     .subscribe((mobiles: any[]) => {
  //       this.product = mobiles;
  //     });
  // }
  
}


// try {
//   const docRef = await addDoc(collection(db, 'users'), {
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815,
//   });
//   console.log('Document written with ID: ', docRef.id);
// } catch (e) {
//   console.error('Error adding document: ', e);
// }
