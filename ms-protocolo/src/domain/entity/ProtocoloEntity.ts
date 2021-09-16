import GuiaEntity from "./GuiaEntity";
import IBaseEntity from "./IBaseEntity";

export default class ProtocoloEntity implements IBaseEntity{
    codigo: string;
    data: Date;
    desconto: number;
    pacienteId: string;
    guias: GuiaEntity[];

    constructor(sequencia: number,data: Date, pacienteId: string, guias?:GuiaEntity[]){
        this.codigo = sequencia + 1 +"/" + data.getFullYear();
        this.data = data;
        this.pacienteId = pacienteId;
        if(guias) this.guias = guias;
    }

    setCodigo(codigo: string){
        this.codigo = codigo;
    }
    

    getTotal():number{
        let total = 0;

        for(const guia of this.guias){
            total += guia.getTotal();
        }

        if(this.desconto) total -= (total*this.desconto)/100;

        return total;
    }

    atribuiDesconto(desconto: number){
        if(desconto > 5) throw new Error("O desconto não pode ser maior do que 5%");
    }

    equals(obj: IBaseEntity): boolean {
        if(!( obj instanceof ProtocoloEntity)) return false;
        return this.codigo == obj.codigo;
    }
}