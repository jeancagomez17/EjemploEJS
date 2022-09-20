import {data }from '../database/data'

export interface IUser {
    id:number,
    name:string,
    profesion:string,
    imagen?:string
}

export class ModelUser{

    get getAllUser():Array<IUser>{
        return data as Array<IUser>;
    }

     getUserById(id:number):Array<IUser>{
        const newarray = data.filter((element) => {
            if (id == element.id)
                return element.id;
        })
        return newarray as Array<IUser>
    }

    




}



