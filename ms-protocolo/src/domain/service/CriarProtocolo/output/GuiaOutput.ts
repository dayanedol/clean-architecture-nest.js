import GuiaEntity from "src/domain/entity/GuiaEntity";
import ProcedimentoGuiaOutput from "./ProcedimentoGuiaOutput";

export default class GuiaOutput{
    numero: string;
    dataValidade: Date;
    codigoAutorizacao: string;
    convenioId: string;
    matricula: string;
    dataAutorizacao: Date;
    procedimentos: ProcedimentoGuiaOutput[];

    constructor(numero: string, dataAutorizacao: Date, dataValidade: Date, codigo: string, matricula: string, convenioId: string, procedimentos: ProcedimentoGuiaOutput[]){
        this.numero = numero;
        this.dataAutorizacao = dataAutorizacao;
        this.dataValidade = dataValidade;
        this.matricula = matricula;
        this.convenioId = convenioId;
        this.codigoAutorizacao = codigo;
        this.procedimentos = procedimentos;


    }

    static fromEntity(g: GuiaEntity):GuiaOutput{
        const listaProc = g.procedimentos.map(p =>{
            return ProcedimentoGuiaOutput.fromEntity(p);
        })
        return new GuiaOutput(g.numero,g.dataAutorizacao,g.dataValidade,g.codigoAutorizacao,g.matricula,g.convenioId,listaProc);
    }

    static toEntity(g: GuiaOutput):GuiaEntity{
        const listaProc = g.procedimentos.map(p =>{
            return ProcedimentoGuiaOutput.toEntity(p);
        })
        return new GuiaEntity(g.numero,g.dataAutorizacao,g.dataValidade,g.codigoAutorizacao,g.matricula,g.convenioId,listaProc);
        
    }
}