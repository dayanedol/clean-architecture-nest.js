import GuiaEntity from "src/domain/entity/GuiaEntity";
import ProtocoloEntity from "src/domain/entity/ProtocoloEntity";
import ProcedimentoGuia from "src/domain/entity/valueObjects/ProcedimentoGuia";
import ProtocoloRepository from "src/domain/repository/ProtocoloRepository";
import ProtocoloInput from "./input/ProtocoloInput";
import GuiaOutput from "./output/GuiaOutput";
import ProcedimentoGuiaOutput from "./output/ProcedimentoGuiaOutput";
import ProtocoloOutput from "./output/ProtocoloOutput";

export default class CriarProtocolo{

    protocoloRepository : ProtocoloRepository;

    constructor(protocoloRepository: ProtocoloRepository){
        this.protocoloRepository = protocoloRepository;
    }

    async executar(protocoloInput: ProtocoloInput):Promise<ProtocoloOutput>{
        const totalProtocolo = await this.protocoloRepository.count();
        const protocolo = new ProtocoloEntity(totalProtocolo,new Date(),protocoloInput.pacienteId);

        if(protocoloInput.desconto) protocolo.atribuiDesconto(protocoloInput.desconto);

        for(const guiaInput of protocoloInput.guias){
            const guia = new GuiaEntity(guiaInput.numero,guiaInput.dataAutorizacao,guiaInput.dataValidade, guiaInput.codigoAutorizacao,guiaInput.matricula,guiaInput.convenioId);

            for(const procedimentoInput of guiaInput.procedimentos){
                guia.adicionarProcedimentos(procedimentoInput.procedimetoId, procedimentoInput.nomeProcedimento, procedimentoInput.qtd,procedimentoInput.valorUnitario);
            }

            protocolo.guias.push(guia);
        }

        const pr = await this.protocoloRepository.save(protocolo);

        const protocoloOutput = ProtocoloOutput.fromEntity(pr);


        return protocoloOutput;
    }
}