import { Component, OnInit } from '@angular/core';
import { InscricaoService } from '../../services/inscricao.service';
import { Subscription } from 'rxjs';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Inscricao } from '../../interfaces/inscricao';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.page.html',
  styleUrls: ['./inscricao.page.scss'],
})
export class InscricaoPage implements OnInit {

  private inscricoes = new Array<Inscricao>();
  private isAdd : boolean;
  private isList : boolean;
  private insc: Inscricao ={};


  private inscricaoService : InscricaoService;
  private acampamentoId: string = null;
  private loading: any;
  private inscricaoSubscription: Subscription;
  
  constructor( inscService : InscricaoService,private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController   ) { 
    
      this.inscricaoService = inscService;
      
      this.acampamentoId = this.activatedRoute.snapshot.params['id'];
      let option1 = this.activatedRoute.snapshot.params['add'];
      let option2 = this.activatedRoute.snapshot.params['list'];

      console.log(option1);

      console.log(option2);




    if ( option1 == 'add'   ){ 
      this.isAdd = true;
      this.isList = false;
    }
    else{
      this.isAdd = false;
      this.isList = true;
      this.loadInscricoes();


    }
  }

  loadInscricoes() {
    this.inscricaoSubscription = this.inscricaoService.getInscricoes().subscribe(data => {
      this.inscricoes = data.filter( i =>{
        return  i.acampamentoId ==  this.acampamentoId;
      });

     


    });
  }

  ngOnDestroy() {
    if (this.inscricaoSubscription) this.inscricaoSubscription.unsubscribe();
  }

  ngOnInit() {
  }

  salvarInscricao(){
    this.insc.dataInscricao = new Date().getDate();
    this.insc.usuarioId =  this.authService.getAuth().currentUser.uid;
    this.insc.status = false;
    this.insc.acampamentoId =  this.acampamentoId  ;
    this.inscricaoService.addInscricoes(this.insc);
  }

}


    
 