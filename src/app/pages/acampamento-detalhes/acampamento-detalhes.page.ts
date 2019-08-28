import { Component, OnInit } from '@angular/core';
import { Acampamento } from '../../interfaces/acampamento';
import { AcampamentoService } from '../../services/acampamento.service';

@Component({
  selector: 'app-acampamento-detalhes',
  templateUrl: './acampamento-detalhes.page.html',
  styleUrls: ['./acampamento-detalhes.page.scss'],
})
export class AcampamentoDetalhesPage implements OnInit {

  private acamp: Acampamento ={};
  private acampService : AcampamentoService;
  
  constructor( acampamentoService : AcampamentoService   ) { 
    this.acampService = acampamentoService;
  }

  ngOnInit() {
  }

  salvarAcamp(){
    this.acamp.criacaoData = new Date().getTime();
    this.acampService.addAcampamentos(this.acamp);
  }

 

}
