import ProtocoloEntity from "src/domain/entity/ProtocoloEntity";
import ProtocoloRepository from "src/domain/repository/ProtocoloRepository";

export default class ProtocoloMemoryRepository implements ProtocoloRepository{
    lista : ProtocoloEntity[];

    async getAll(): Promise<ProtocoloEntity[]> {
        return this.lista;
    }
    async getOne(codigo: string): Promise<ProtocoloEntity> {
        return this.lista.filter(x =>{
            if(x.codigo = codigo) return x;
        })[0]
    }
    async delete(codigo: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async save(entity: ProtocoloEntity): Promise<ProtocoloEntity> {
        this.lista.push(entity);
        return entity;
    }
    async count(): Promise<number> {
        return this.lista.length;
    }
    
}