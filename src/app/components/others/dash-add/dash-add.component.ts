import { Component } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule,
} from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { getDatabase, ref, set } from 'firebase/database';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';
import { collection, doc, setDoc } from 'firebase/firestore';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-dash-add',
  imports: [
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule,

    CommonModule,
  ],
  templateUrl: './dash-add.component.html',
})
export class DashAddComponent {
  // writeUserData(
  //   id: number,
  //   name: string,
  //   price: number,
  //   image: string,
  //   description: string,
  //   category: string,
  // ) {
  //   const db = getDatabase();
  //   set(ref(db, 'users/' + id), {
  //     username: name,
  //     price: price,
  //     profile_picture: image,
  //     description: description,
  //     category: category,
  //   });
  // }

  // product$: any;
  // productRef: any;
  // constructor(private afs: AngularFirestore) {
  //   this.productRef = this.afs.collection('product');
  //   this.product$ = this.productRef.valueChanges();
  // }
  // productRef: AngularFirestoreCollection<Todo>;
  // product$: Observable<Todo[]>;

  // constructor(private firestore: AngularFirestore) {
  //   // Use this.firestore to interact with Firestore
  // }
  // addProduct(
  //   id: number,
  //   name: string,
  //   price: number,
  //   image: string,
  //   description: string,
  //   category: string,
  // ) {
  //   const productRef = this.firestore.collection('product').doc(id.toString());
  //   productRef.set({
  //     name,
  //     price,
  //     image,
  //     description,
  //     category,
  //   });



  //   const citiesRef = collection(db, 'product');


  //   await setDoc(doc(citiesRef, 'SF'), {
  //     name: 'San Francisco',
  //     state: 'CA',
  //     country: 'USA',
  //     capital: false,
  //     population: 860000,
  //     regions: ['west_coast', 'norcal'],
  //   });
  // }
}
