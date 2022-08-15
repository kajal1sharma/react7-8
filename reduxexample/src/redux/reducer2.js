
let defaultState={count:0}

function reducer2(state=defaultState, action){

    if(action.type==="decrement"){
        return {...state, count:state.count-1}
    }
    else if(action.type==="increment"){
        return {...state, count:state.count+1}
    }
    return {...state}
}


export default reducer2;