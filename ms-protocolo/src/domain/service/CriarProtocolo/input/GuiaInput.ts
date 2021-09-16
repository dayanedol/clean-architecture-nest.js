import ProcedimentoGuiaInput from "./ProcedimentoGuiaInput";

export default class GuiaInput{
    numero: string;
    dataValidade: Date;
    codigoAutorizacao: string;
    convenioId: string;
    matricula: string;
    dataAutorizacao: Date;
    procedimentos: ProcedimentoGuiaInput[];

    constructor(numero: string, dataAutorizacao: Date, dataValidade: Date, codigo: string, matricula: string, convenioId: string, procedimentos: ProcedimentoGuiaInput[]){
        this.numero = numero;
        this.dataAutorizacao = dataAutorizacao;
        this.dataValidade = dataValidade;
        this.matricula = matricula;
        this.convenioId = convenioId;
        this.codigoAutorizacao = codigo;
        this.procedimentos = procedimentos;


    }
}