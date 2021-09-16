import IBaseEntity from "../entity/IBaseEntity";

export default interface IRepository<T extends IBaseEntity,I>{

    getAll(): Promise<T[]>;
    getOne(codigo: I):Promise <T>;
    delete(codigo: I): Promise<void>;
    save(entity: T): Promise<T>;
    count():Promise<number>;
}