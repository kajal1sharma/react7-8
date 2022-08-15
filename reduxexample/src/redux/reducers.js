
let defaultState={ name:"" }

function reducer1(state=defaultState, action){

    if(action.type==="nameChange")
    {
        return {...state,name:action.name}
    }
    
    return {...state}
}


export default reducer1;