import {auth} from "@/auth"
import {db} from "@/lib/db"

export const grtUserById=async(id:string)=>{
    try{
        const user=await db.user.findUnique({

        })
    }
    catch(error){
        
    }
}