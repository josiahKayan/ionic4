import { Acampamento } from './acampamento';

export interface Inscricao {

    nome? : string ;
    telefone? : string ;
    liderGA? : string ;
    onibus? : boolean;
    formaPagamento? : string ;
    quantidadePaga? :number;
    dataInscricao? : number ;
    usuarioId? : string;
    status? : boolean;
    acampamentoId?: string;
}
