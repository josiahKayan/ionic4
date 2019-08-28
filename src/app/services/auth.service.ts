import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }


  register( user: User ){
    // return this.auth.createUserWithEmailAndPassword(login, password);

    
    this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);

  }

  login( user: User ){
    // return this.auth.createUserWithEmailAndPassword(login, password);

    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);

  }

  logout(){
    return this.afa.auth.signOut();
  }

  getAuth(){
    return this.afa.auth;
  }

}
