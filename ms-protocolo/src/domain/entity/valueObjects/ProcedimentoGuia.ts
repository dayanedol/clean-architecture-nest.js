export default class ProcedimentoGuia{
    procedimetoId: string;
    nomeProcedimento: string;
    qtd: number;
    valorUnitario: number;

    constructor(procedimentoId: string, procedimentoNome: string, qtd: number,valorUnitario: number){
        this.procedimetoId = procedimentoId;
        this.nomeProcedimento = procedimentoNome;
        this.qtd = qtd;
        this.valorUnitario = valorUnitario;

        if(qtd <= 0) throw new Error("Quantidade do procedimento "+this.nomeProcedimento +" tem que ser maior que zero");
        if(valorUnitario <= 0) throw new Error("Valor do procedimento "+this.nomeProcedimento +" tem que ser maior que zero")
    }

    getTotal(): number{
        return this.qtd * this.valorUnitario;
    }
}