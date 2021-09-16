import ProtocoloEntity from "src/domain/entity/ProtocoloEntity";
import GuiaOutput from "./GuiaOutput";
import GuiaInput from "./GuiaOutput";

export default class ProtocoloOutput{
    pacienteId: string;
    desconto: number;
    guias: GuiaOutput[];
    codigo: string;
    data: Date;
    total: number;

    constructor(pacienteId: string, data: Date,desconto: number, guias: GuiaOutput[], codigo: string,  total: number){
        this.pacienteId = pacienteId;
        this.desconto = desconto;
        this.guias = guias;
        this.codigo = codigo;
        this.data = data;
        this.total = total;
    }

    
    static fromEntity(p: ProtocoloEntity): ProtocoloOutput{
        const g = p.guias.map(x => {
            return GuiaOutput.fromEntity(x);
        })
        return new ProtocoloOutput(p.pacienteId,p.data,p.desconto,g,p.codigo,p.getTotal());;
    }

    static toEntity(p: ProtocoloOutput): ProtocoloEntity{
        const g = p.guias.map(x => {
            return GuiaOutput.toEntity(x);
        })
        
        const protocoloEnt = new ProtocoloEntity(0,p.data,p.pacienteId,g);
        protocoloEnt.setCodigo(p.codigo);
        return protocoloEnt; 
    }
}