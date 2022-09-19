import {data }from '../database/data'

interface IUser {
    id:number,
    name:string,
    profesion:string
}

class ModelUser{
    get getAllUser():Array<IUser>{
        return data as Array<IUser>;
    }
}

const model = new ModelUser()
console.log(model.getAllUser);

