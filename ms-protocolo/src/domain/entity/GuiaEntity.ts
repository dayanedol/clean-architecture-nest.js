import IBaseEntity from "./IBaseEntity";
import ProcedimentoGuia from "./valueObjects/ProcedimentoGuia";

export default class GuiaEntity implements IBaseEntity{
    numero: string;
    dataValidade: Date;
    codigoAutorizacao: string;
    convenioId: string;
    matricula: string;
    dataAutorizacao: Date;
    procedimentos: ProcedimentoGuia[];

    constructor(numero: string, dataAutorizacao: Date, dataValidade: Date, codigo: string, matricula: string, convenioId: string,procedimentos?:ProcedimentoGuia[]){
        this.numero = numero;
        this.dataAutorizacao = dataAutorizacao;
        this.dataValidade = dataValidade;
        this.matricula = matricula;
        this.convenioId = convenioId;
        this.codigoAutorizacao = codigo;
        if(procedimentos) this.procedimentos = procedimentos;

    }
    
    adicionarProcedimentos(procedimentoId: string, procedimentoNome: string, qtd: number, valorUnitario: number){
        const procedimentoGuia = new ProcedimentoGuia(procedimentoId,procedimentoNome,qtd,valorUnitario);
        this.procedimentos.push(procedimentoGuia);
    }

    getTotal():number{
        let total = 0;

        for(const item of this.procedimentos){
            total += item.getTotal();
        }

        return total;
    }

    equals(obj: IBaseEntity): boolean {
        if(!( obj instanceof GuiaEntity)) return false;
        return this.numero == obj.numero;
    }
}