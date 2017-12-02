import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {projectsDB} from '../firebase';
import {randomFunction} from '../randomNumber';

class Tasks extends Component {

    addProject(){
        if(this.nameProject.input.value && this.linkProject.input.value){
            projectsDB.push({
                name: this.nameProject.input.value,
                link: this.linkProject.input.value,
                id: randomFunction(),
                performers: {
                    main: '',
                    inside: ''
                },
                completed: false
            });
        }
    }

    render(){
        return(
            <div className="inputdata">
                <div className="input__name">
                    <TextField
                        floatingLabelText="Название проекта"
                        ref={(project)=>this.nameProject=project}
                    />
                </div>
                <div className="input__link">
                    <TextField
                        floatingLabelText="Ссылка на задачу"
                        ref={(link)=>this.linkProject=link}
                    />
                </div>
                <div className="input__btn">
                    <RaisedButton
                        label="Добавить"
                        onClick={()=>this.addProject()}
                    />
                </div>
            </div>
        )
    }
}

export default Tasks;