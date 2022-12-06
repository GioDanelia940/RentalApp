import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from '@firebase/util';
import { Subscription } from 'rxjs';
import { AccountServiceService } from '../user-account/account-service.service';
import { User } from '../user-account/user.model';
import { getAuth, updatePassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseWorkerService implements OnDestroy {
  userData!: any;
  subSigned: Subscription = new Subscription();
  subLogged: Subscription = new Subscription();
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private router: Router,
    private accountService: AccountServiceService
  ) {}
  ngOnDestroy(): void {
    console.log('inside ondestroy');
    this.subSigned.unsubscribe();
  }

  signIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.subSigned = this.auth.authState.subscribe((user) => {
          if (user) {
            console.log(user);
          }
        });
        this.router.navigate(['']);
        this.subLogged = this.getUserDoc(result.user?.uid ?? '').subscribe(
          (user: any) => {
            console.log('sign in successful');
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('logged', JSON.stringify(true));
            this.accountService.userLogged.next(true);
            this.accountService.userUpdated.next(
              JSON.parse(<string>localStorage.getItem('user'))
            );
          }
        );
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
        this.router.navigate(['']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  SignOut() {
    return this.auth.signOut().then(() => {
      console.log('sign out successful');
      this.subLogged.unsubscribe();
      this.subSigned.unsubscribe();
      localStorage.removeItem('user');
      localStorage.removeItem('logged');
      this.router.navigate(['']);
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
  updateFirePassword(newPassword: string) {
    let auth = getAuth();
    let currentUser = auth.currentUser;
    updatePassword(currentUser!, newPassword)
      .then(() => {
        console.log('password changed successfully');
      })
      .catch((error) => {
        window.alert(error.message);
      });
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
  update(user: User, id: string) {
    return this.firestore
      .collection('users')
      .doc(user.id)
      .update(Object.assign({}, user));
  }
}
