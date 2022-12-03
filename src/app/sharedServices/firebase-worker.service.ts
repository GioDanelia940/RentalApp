import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from '@firebase/util';
import { User } from '../user-account/user.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseWorkerService {
  userData!: any;
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  signIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.auth.authState.subscribe((user) => {
          if (user) {
            console.log(user);
          }
        });
        return this.getUserDoc(result.user?.uid ?? '');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signUp(user: User) {
    return this.auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        this.setUserDataForSignUp(result.user, user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  sendVerificationMail() {
    // return this.afAuth.currentUser
    // .then((u: any) => u.sendEmailVerification())
    // .then(() => {
    // this.router.navigate(['verify-email-address']);
    // });
  }

  getUserDoc(id: string): any {
    return this.firestore.collection('users').doc(id).valueChanges();
  }

  setUserDataForSignUp(fireUser: any, user: User) {
    console.log(user);
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${fireUser.uid}`
    );
    const userData: User = {
      id: fireUser.uid,
      email: user.email,
      password: user.password,
      verifiedUser: true,
      firstName: user.firstName,
      lastName: user.lastName,
      country: user.country,
      city: user.city,
      cardType: user.cardType,
      cardNumber: user.cardNumber,
    } as User;
    return userRef.set(userData, {
      merge: true,
    });
  }
}
