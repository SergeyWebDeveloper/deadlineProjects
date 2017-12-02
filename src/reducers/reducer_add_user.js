import {ADD_USER} from '../constants';
const initialState=[];


export default (state=initialState,action)=>{
    switch (action.type){
        case ADD_USER:
            return action.persons;
        default:
            return state;
    }
}
