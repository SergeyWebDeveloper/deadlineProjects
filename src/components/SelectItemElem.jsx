import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import {connect} from 'react-redux';


class SelectItemElem extends Component{

    render(){
        return(
            <SelectField
                floatingLabelText="Ответственный"
                value=''
                onChange={this.props.onChange}
            >
                {
                    this.props.usersCompany.map((user,index)=>{
                        return <MenuItem key={user.serverKey} value={user.serverKey} primaryText={`${user.name} - ${user.post}`}  />
                    })
                }
            </SelectField>
        )
    }
}

function mapStateToProps(state) {
    return {
        usersCompany: state.usersCompany
    }
}

export default connect(mapStateToProps,null)(SelectItemElem);