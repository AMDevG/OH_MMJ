import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private userDoc: AngularFirestoreDocument<User>;
  users: AngularFirestoreCollection<User>;

  constructor(private af: AngularFirestore) {
    // this.users = af.collection<User>('users');
   }

   getUsers(){
     return this.af.collection('users').snapshotChanges();
   }
   addUser(user: User){
     return this.af.collection('users').add(user);
   }
   updateUser(id, user: User){
     this.af.doc<User>(`users/${id}`).update(user);
   }

   getUser(id: string){
     console.log(`Getting user: ${id}`)
    this.userDoc = this.af.doc<User>(`users/${id}`);
  
  }

}

