import React, {Component} from 'react';
import ProjectItem from './ProjectItem';
import {projectsDB,personalDB} from '../firebase';
import {addProject,addPerson} from '../actions';
import {connect} from 'react-redux';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

class TableData extends Component {
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

    componentDidMount(){
        projectsDB.on('value',snap=>{
            let projects=[];
            snap.forEach(project=>{
                const {completed, link,name,performers} = project.val();
                const serverKey = project.key;
                projects.push({completed,link,name,performers,serverKey});
            });
            this.props.addProject(projects);
        });

        personalDB.on('value',snap=>{
            let personals=[];
            snap.forEach(user=>{
                const {name,post} = user.val();
                const serverKey = user.key;
                personals.push({name,post,serverKey});
            });
            this.props.addPerson(personals);
        });
    }

    render(){
        return(
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

                        {
                            this.props.projects.map((project,index)=>{
                                return <ProjectItem users={this.props.usersCompany} index={index} key={project.serverKey} project={project} />
                            })
                        }

                    </TableBody>
                </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects,
        usersCompany: state.usersCompany
    }
}

export default connect(mapStateToProps,{addProject,addPerson})(TableData);