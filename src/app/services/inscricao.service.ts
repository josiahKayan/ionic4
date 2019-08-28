import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { Inscricao } from '../interfaces/inscricao';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  private incricoes : AngularFirestoreCollection<Inscricao>;

  constructor( private afs : AngularFirestore,    private navCtrl: NavController  ) {
    this.incricoes = this.afs.collection<Inscricao>('Inscricao');
   }

   getInscricoes(){
    return this.incricoes.snapshotChanges().pipe(
      map( actions =>{
        return actions.map(a  =>{
          let data = a.payload.doc.data();
          const id = a.payload.doc.id;

          

          return {id, ...data};
        });
      })
    )
  }

  addInscricoes(insc : Inscricao){
    this.incricoes.add(insc);
    this.navCtrl.navigateBack('/acampamento');
  }

 

  getInscricao(id: string) {
    return this.incricoes.doc<Inscricao>(id).valueChanges();
  }

  updateInscricao(){

  }

  deleteInscricao(){
    
  }

}
