import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Acampamento } from '../interfaces/acampamento';
import {map} from 'rxjs/operators';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AcampamentoService {

  private acampamentos : AngularFirestoreCollection<Acampamento>;

  constructor( private afs : AngularFirestore,    private navCtrl: NavController  ) {
    this.acampamentos = this.afs.collection<Acampamento>('Acampamento');
   }

  getAcampamentos(){
    return this.acampamentos.snapshotChanges().pipe(
      map( actions =>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return {id, ...data};
        });
      })
    )
  }

  addAcampamentos(acamp : Acampamento){
    this.acampamentos.add(acamp);
    this.navCtrl.navigateBack('/acampamento');
  }

  getAcampamento(){

  }

  updateAcampamento(){

  }

  deleteAcampamento(){
    
  }

}
