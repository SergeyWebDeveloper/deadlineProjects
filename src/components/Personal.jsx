import React , {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {rersonalDB} from '../firebase';
import {randomFunction} from '../randomNumber';

class Personal extends Component{

    addUser(){
        if(this.textData.input.value.trim().length && this.textPost.input.value.trim().length){
            let name=this.textData.input.value;
            let post=this.textPost.input.value;
            let obj={
              name,
              post,
              active: true,
              id: randomFunction()
            };
            rersonalDB.push(obj);
        }
    }

    render(){
        return(
            <div>
                <TextField
                    floatingLabelText="Сотрудник"
                    ref={(data) => this.textData = data }
                />
                <TextField
                    floatingLabelText="Должность"
                    ref={(post) => this.textPost = post }
                />
                <RaisedButton
                    label= 'Добавить'
                    onClick={()=>this.addUser()}
                />
            </div>
        )
    }
}



export default Personal;