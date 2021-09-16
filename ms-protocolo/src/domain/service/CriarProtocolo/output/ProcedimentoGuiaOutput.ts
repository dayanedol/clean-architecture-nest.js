import ProcedimentoGuia from "src/domain/entity/valueObjects/ProcedimentoGuia";

export default class ProcedimentoGuiaOutput{
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

    static fromEntity(p: ProcedimentoGuia): ProcedimentoGuiaOutput{
        return new ProcedimentoGuiaOutput(p.procedimetoId,p.nomeProcedimento,p.qtd,p.valorUnitario);
    }

    static toEntity(p: ProcedimentoGuiaOutput): ProcedimentoGuia{
        return new ProcedimentoGuia(p.procedimetoId,p.nomeProcedimento,p.qtd,p.valorUnitario);
    }
}