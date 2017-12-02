import {SIGNED_IN} from '../constants';
const initialState={};

export default (state=initialState,action)=>{
    switch (action.type){
        case SIGNED_IN:
            return action.payload;
        default:
            return state;
    }
}