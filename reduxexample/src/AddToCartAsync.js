import Request from "./apiRequest";
const  AsyncADDToCart =  (id)=>{

    return async (dispatch, getState)=>{
            
            await Request(dispatch, id);

            // setTimeout(()=>{
            //     dispatch(addToCart(id))
            // }, 3000)
           
    }

}

export default  AsyncADDToCart