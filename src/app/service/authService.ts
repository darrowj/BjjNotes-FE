import { Injectable } from '@angular/core';
import {IUser} from '../model/user'
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  public currentUser:IUser
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {

    this.user = this.afAuth.authState;

  }


  loginUser(userName: string, password: string): Observable<any> {
    return Observable.fromPromise(
      this.afAuth.auth.signInWithEmailAndPassword(userName, password)
    );
    //this.currentUser = {
    //  id: Math.random(),
    //  userName: userName,
    //  firstName: 'John',
    //  lastName: 'Papa'
    //}
  }

  isAuthenticated(): Observable<boolean> {
    return this.user.map(user => user && user.uid !== undefined);
    //return !!this.currentUser;
  }

  updateCurrentUser(firstName:string, lastName:string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginWithTwitter() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }


}
