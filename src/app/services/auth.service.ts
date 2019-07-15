import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }


  register( login : string, password: string ){
    // return this.auth.createUserWithEmailAndPassword(login, password);

    return this.auth.auth.createUserWithEmailAndPassword(login, password);

  }

  login( login : string, password: string ){
    // return this.auth.createUserWithEmailAndPassword(login, password);

    return this.auth.auth.signInWithEmailAndPassword(login, password);

  }

  getAuth(){
    return this.auth.auth;
  }

}
