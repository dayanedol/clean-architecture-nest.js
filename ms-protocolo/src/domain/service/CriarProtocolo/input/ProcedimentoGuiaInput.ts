export default class ProcedimentoGuiaInput{
    procedimetoId: string;
    nomeProcedimento: string;
    qtd: number;
    valorUnitario: number;

    constructor(procedimentoId: string, procedimentoNome: string, qtd: number,valorUnitario: number){
        this.procedimetoId = procedimentoId;
        this.nomeProcedimento = procedimentoNome;
        this.qtd = qtd;
        this.valorUnitario = valorUnitario;
    }
}