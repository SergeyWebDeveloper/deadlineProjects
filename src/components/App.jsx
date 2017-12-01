import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


class App extends Component {
    constructor(){
        super();
        this.state={
            fixedHeader: true,
            fixedFooter: true,
            showCheckboxes: false,
            showRowHover: true,
            height: '400px'
        }
    }
    render(){
        return(
            <div className="wrapper">
                <div className="signin">
                    <p>Вы вошли как: <span>test@test.ru</span></p>
                </div>
                <div className="inputdata">
                    <div className="input__name">
                        <TextField
                            floatingLabelText="Название проекта"
                        />
                    </div>
                    <div className="input__link">
                        <TextField
                            floatingLabelText="Ссылка на задачу"
                        />
                    </div>
                    <div className="input__btn">
                        <RaisedButton
                            label="Добавить"
                        />
                    </div>
                </div>

                <div className="table__data">
                    <Table
                        fixedHeader={this.state.fixedHeader}
                        fixedFooter={this.state.fixedFooter}
                        height={this.state.height}
                    >
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Проект</TableHeaderColumn>
                                <TableHeaderColumn>Главная</TableHeaderColumn>
                                <TableHeaderColumn>Внутренние</TableHeaderColumn>
                                <TableHeaderColumn>DeadLine</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            showRowHover={this.state.showRowHover}
                        >
                            <TableRow>
                                <TableRowColumn>1</TableRowColumn>
                                <TableRowColumn>
                                    <SelectField
                                        floatingLabelText="Ответственный"
                                        value={1}
                                    >
                                        <MenuItem value={1} primaryText="Never" />
                                        <MenuItem value={2} primaryText="Every Night" />
                                        <MenuItem value={3} primaryText="Weeknights" />
                                        <MenuItem value={4} primaryText="Weekends" />
                                        <MenuItem value={5} primaryText="Weekly" />
                                    </SelectField>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <SelectField
                                        floatingLabelText="Ответственный"
                                        value={2}
                                    >
                                        <MenuItem value={1} primaryText="Never" />
                                        <MenuItem value={2} primaryText="Every Night" />
                                        <MenuItem value={3} primaryText="Weeknights" />
                                        <MenuItem value={4} primaryText="Weekends" />
                                        <MenuItem value={5} primaryText="Weekly" />
                                    </SelectField>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <DatePicker hintText="Дедлайн" />
                                </TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>2</TableRowColumn>
                                <TableRowColumn>Randal White</TableRowColumn>
                                <TableRowColumn>Unemployed</TableRowColumn>
                                <TableRowColumn>Unemployed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>3</TableRowColumn>
                                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>4</TableRowColumn>
                                <TableRowColumn>Steve Brown</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                                <TableRowColumn>Employed</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>5</TableRowColumn>
                                <TableRowColumn>Christopher Nolan</TableRowColumn>
                                <TableRowColumn>Unemployed</TableRowColumn>
                                <TableRowColumn>Unemployed</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

            </div>
        )
    }
}

export default App;