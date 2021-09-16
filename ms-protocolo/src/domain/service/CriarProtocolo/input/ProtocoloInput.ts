import GuiaInput from "./GuiaInput";

export default class ProtocoloInput{
    pacienteId: string;
    desconto: number;
    guias: GuiaInput[];

    constructor(pacienteId: string, desconto: number, guias: GuiaInput[]){
        this.pacienteId = pacienteId;
        this.desconto = desconto;
        this.guias = guias;
    }
}