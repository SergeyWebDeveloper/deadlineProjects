import {ADD_PROJECT} from '../constants';
const initialState=[];

export default (state=initialState,action)=>{
    switch (action.type){
        case ADD_PROJECT:
            return action.projects;
        default:
            return state;
    }
}