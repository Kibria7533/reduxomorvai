import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {DECRE, INCRE} from './incAction'
function Omor(props) {

    const data=useSelector(state=>state.incReducer.count)
    const dispatch=useDispatch();
    console.log(data)
    return (
        <div>
            <h1>Omor Bhai {data}</h1>
            <button onClick={()=>dispatch(INCRE(7))}>ADD</button>
            <button onClick={()=>dispatch(DECRE(6))}>SUB</button>
        </div>
    );
}

export default Omor;