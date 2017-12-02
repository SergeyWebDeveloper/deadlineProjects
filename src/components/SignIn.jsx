import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {firebaseApp} from '../firebase';
import * as firebase from 'firebase';

class SignIn extends Component {

    constructor(){
        super();
        this.state={
            error: {
                message: ''
            }
        }
    }

    signInGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        const that=this;
        firebaseApp.auth().signInWithPopup(provider ).then(function(result) {})
            .catch(function(error) {
            that.setState({error});
        });
    }

    render(){
        const {error} =this.state;
        return(
            <div className="signin signin-form">
                <RaisedButton
                    label="Войти с аккаунта google"
                    primary={true}
                    onClick={()=>this.signInGoogle()}
                />
                <p>{error.message}</p>
            </div>
        );
    }
}

export default SignIn;
