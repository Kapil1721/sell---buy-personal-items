import { toast } from "sonner"

export const getAlert = (type,field)=>{
    if(type===1){
        toast.error(`Please Enter ${field}`)
    }
}