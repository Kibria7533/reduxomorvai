export const INCRE=(data)=>(dispatch)=>{
    return dispatch({type: 'INC',"add":data})
    
}

export const DECRE=(data)=>(dispatch)=>{
    return dispatch({type: 'DEC',"dec":data})
    
}