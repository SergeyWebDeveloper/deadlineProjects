import {combineReducers} from 'redux';
import user from './reducer_user';
import usersCompany from './reducer_add_user';

export default combineReducers({
   user,
   usersCompany
});