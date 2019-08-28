import { Component, OnInit } from '@angular/core';
import { Acampamento } from '../../interfaces/acampamento';
import { Subscription } from 'rxjs';
import { AcampamentoService } from '../../services/acampamento.service';

@Component({
  selector: 'app-acampamento',
  templateUrl: './acampamento.page.html',
  styleUrls: ['./acampamento.page.scss'],
})
export class AcampamentoPage implements OnInit {

  private acampamentos = new Array<Acampamento>();
  private acampamentosSubscription : Subscription;

  constructor(private acampamentoService : AcampamentoService) {

    this.acampamentosSubscription = this.acampamentoService.getAcampamentos().subscribe(  data =>{
      this.acampamentos = data;
    });

   }

  ngOnInit() 
  {
  }

  ngOnDestroy(){
    this.acampamentosSubscription.unsubscribe();
 
  }

  
}
