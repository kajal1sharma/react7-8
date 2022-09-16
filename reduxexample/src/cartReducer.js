//reduccer 2 is for cart
const initialState =[];

const reducer =(state=initialState, action)=>{
   
   if(action.type==="addToCart"){
      //logic
      return [...state,action.id];
   }
   return state;
}

export default reducer;