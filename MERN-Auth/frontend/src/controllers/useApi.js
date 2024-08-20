/* eslint-disable react-hooks/rules-of-hooks */
import axios,{isCancel} from "axios"

export const useApi = async (method,url,data={})=>{
    // console.log(url)
    // console.log(data)
    const controller = new AbortController();

    return (
        async()=>{
            try {
              const response = await axios[method](url,{ ...data, signal: controller.signal} )
              // console.log(response)
              return response
            } catch (error) {
              if(isCancel(error)){
                return error
              }
             
              return error
            }
           
        
          }
    )()
}


