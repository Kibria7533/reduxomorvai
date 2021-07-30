const initialState={count:6}

const incReducer=(state=initialState,action)=>{
    if(action.type=='INC'){
        return {
            ...state,
            count:state.count+action.add
        }
    }

    else if(action.type=='DEC'){
        return {
            ...state,
            count:state.count-action.dec
        }
    }

    return state;

}

export default incReducer;