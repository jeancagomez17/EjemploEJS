import { ModelUser, IUser } from "../models/modelUser";

export class UserController extends ModelUser {

   get getUsers(){
        const datos = super.getAllUser;
        const validate = datos.filter((element =>{
            if(element.hasOwnProperty("imagen")){
                return true
            }
        }))
        return validate


    }

}   
