import {combineReducers} from 'redux';
import user from './reducer_user';
import usersCompany from './reducer_add_user';
import projects from './reducer_project';

export default combineReducers({
   user,
   usersCompany,
   projects
});