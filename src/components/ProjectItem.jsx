import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import SelectItemElem from './SelectItemElem';

import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class ProjectItem extends Component{

		constructor(){
			super();
			this.state={
				mainPage: '',
				insidePage: '',
				date: ''
			};
		}

    handleOnChangeMain(e,data,keyUser){
				this.setState({mainPage: keyUser});
    }

    render(){
        const {link,name,performers,serverKey} = this.props.project;
        return(
            <TableRow>
                <TableRowColumn><a target="_blank" href={link}>{name}</a></TableRowColumn>
                <TableRowColumn>

                    <SelectItemElem onChange={(e,data,key)=>this.handleOnChangeMain(e,data,key)} />

                </TableRowColumn>
                <TableRowColumn>

                    <SelectItemElem />

                </TableRowColumn>
                <TableRowColumn>
                    <DatePicker hintText="Дедлайн" />
                </TableRowColumn>
            </TableRow>
        )
    }
}

export default ProjectItem;