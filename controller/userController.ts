import { ModelUser, IUser } from "../models/modelUser";

export class UserController extends ModelUser {

    getUsers(){
        const datos = super.getAllUser;
        const users:Array<IUser> = []
        
        datos.forEach((element =>{
            if(Object.entries(element).length == 4){
                console.log('Exito')
                users.push(element)
            }
            
           
        }))
        return users as Array<IUser>
        
    }

}   
const app = new UserController();
app.getUsers()