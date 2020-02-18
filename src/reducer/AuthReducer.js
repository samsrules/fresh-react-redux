import {DESHBOARD} from "./../action/types";


const INIT_DATA = {
    users:null
}

export default (state = INIT_DATA,action) =>{
    switch(action.type){
        case DESHBOARD:
        return {...state, users:action.payload};

        default:
        return state
    }
}