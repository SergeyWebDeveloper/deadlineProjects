import {SIGNED_IN, ADD_USER,ADD_PROJECT} from '../constants';

export function infoUserSignIn(name, email) {
    return {
        type: SIGNED_IN,
        payload: {
            name,
            email
        }
    }
}

export function addPerson(persons) {
    return {
        type: ADD_USER,
        persons
    }
}

export function addProject(projects) {
    return {
        type: ADD_PROJECT,
        projects
    }
}