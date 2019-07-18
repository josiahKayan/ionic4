import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }


  register( login : string, password: string ){
    // return this.auth.createUserWithEmailAndPassword(login, password);

    
    this.afa.auth.createUserWithEmailAndPassword(login, password);

  }

  login( login : string, password: string ){
    // return this.auth.createUserWithEmailAndPassword(login, password);

    return this.afa.auth.signInWithEmailAndPassword(login, password);

  }

  getAuth(){
    return this.afa.auth;
  }

}
