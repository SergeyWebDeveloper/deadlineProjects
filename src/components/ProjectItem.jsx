import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class ProjectItem extends Component{
    render(){
        const {link,name,performers} = this.props.project;
        const {users} = this.props;
        // console.log(users[0].name);
        return(
            <TableRow>
                <TableRowColumn><a target="_blank" href={link}>{name}</a></TableRowColumn>
                <TableRowColumn>
                    <SelectField
                        floatingLabelText="Ответственный"
                        value=''
                    >
                        {users.map((user)=>{
                            return <MenuItem value={user.serverKey} primaryText={user.name}  />;
                        })}
                    </SelectField>
                </TableRowColumn>
                <TableRowColumn>
                    <SelectField
                        floatingLabelText="Ответственный"
                        value=''
                    >
                        {users.map((user)=>{
                            return <MenuItem value={user.serverKey} primaryText={user.name}  />;
                        })}
                    </SelectField>
                </TableRowColumn>
                <TableRowColumn>
                    <DatePicker hintText="Дедлайн" />
                </TableRowColumn>
            </TableRow>
        )
    }
}

export default ProjectItem;