import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBdUVzYF_zfICSbvXUks9oiQOcRtSRIG-E",
    authDomain: "deadline-bb0e4.firebaseapp.com",
    databaseURL: "https://deadline-bb0e4.firebaseio.com",
    projectId: "deadline-bb0e4",
    storageBucket: "",
    messagingSenderId: "61463322022"
};

export const firebaseApp = firebase.initializeApp(config);
export const personalDB = firebase.database().ref('personal');
export const projectsDB = firebase.database().ref('projects');