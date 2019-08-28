import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides, ToastController, LoadingController} from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

@ViewChild(IonSlides) slides: IonSlides;

  private emailRecuperar : string;
  private email : string;
  private password : string;
  private habilitadoLogar: boolean = true;
  private habilitadoRecuperar: boolean = true;
  public user: User = {};
  
  constructor( private toastController: ToastController, private loading: LoadingController, private authService : AuthService) { }

  ngOnInit() {
  }

  escolherEsquecer() {
    this.slides.slideNext();
  }

  escolherLogin() {
    this.slides.slidePrev();
  }

  recuperarSenha(){
    alert('Enviando e-mail para '+this.emailRecuperar);
    this.emailRecuperar = '';
    this.habilitadoRecuperar = false;
  }

  fazerLogin(){
    var email = this.email;
    var password = this.password;
    this.habilitadoLogar = false;

    this.user.email = email;
    this.user.password = password;

    // this.register();
    this.logar(this.user);
  }

  async presentLoading() {
    const loading = await this.loading.create({
      message: 'Por favor, aguarde ...'
    });
    return loading.present();
  }

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  async register(){
    await this.presentLoading();

    try{

      this.user.email = this.email;
      
      this.user.password = this.password;

      await this.authService.register(this.user);
    }
    catch(err){
      await this.presentToast(err.message);
      this.habilitadoLogar = true;
    }
    finally{
      this.loading.dismiss();
    }

  }

  async logar(user : User){
    await this.presentLoading();

    try{

      await this.authService.login(user);
    }
    catch(err){
      await this.presentToast(err.message);
      this.habilitadoLogar = true;
    }
    finally{
      this.loading.dismiss();
    }

  }

}
