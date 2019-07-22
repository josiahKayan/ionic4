import { Acampamento } from './acampamento';

export interface Inscricao {

    inscricaoId : string ;
    nome : string ;
    telefone : string ;
    liderGA : string ;
    onibus : boolean;
    formaPagamento : string ;
    quantidadePaga :number;
    dataInscricao : Date ;
    usuarioId : string;
    status : boolean;
    acampamento: Acampamento;
}
