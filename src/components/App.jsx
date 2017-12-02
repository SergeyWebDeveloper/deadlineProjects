import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import Personal from './Personal';
import Tasks from './Tasks';
import TableData from './ProjectsTable';
import {firebaseApp} from '../firebase';
import {connect} from 'react-redux';


class App extends Component {

    signOutGoogle(){
        firebaseApp.auth().signOut();
    }

    render(){
        const {user} = this.props.user;
        return(
            <div className="wrapper">
                <div className="signin">
                    <p>Вы вошли как: <strong>{user.name}</strong></p>
                    <p>Ваш email: <em>{user.email}</em></p>
                </div>

                <Tasks />

                <TableData />



                {/*<Personal />*/}
                <RaisedButton
                    label="Выйти с аккаунта"
                    primary={true}
                    onClick={()=>this.signOutGoogle()}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state
    }
}

export default connect(mapStateToProps,null)(App);