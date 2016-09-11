import React from 'react';
import Header from './header/header';
import Search from './search/search';
import StudentTable from './studentTable/StudentTable';
import StudentCard from './studentCard/studentCard';
import {refreshStudent, filterStudents} from '../actions';

const content = React.createClass({
    componentWillMount: function () {
        fetch('/students')
            .then(response => response.json())
            .then(data => {
                data.students.forEach(student => {
                    this.props.store.dispatch(refreshStudent(student));
                });
            })
            .then(() => {
                this.props.store.dispatch(filterStudents('result', true));
            });
    },

    render: function () {
        const {students, filteredStudents, foundData, findMentor, selectedStudent, taskCounter} =
            this.props.store.getState();

        return (
            <div>
                <Header />
                <Search foundData={foundData} dispatch={this.props.store.dispatch} />
                <p>
                    <span>✓</span> – полный балл,
                    <span>/</span> – полбалла,
                    <span>•</span> – проверяется,
                    <span>✗</span> – 0 баллов
                </p>
                <StudentCard selectedStudent={selectedStudent} taskCounter={taskCounter}
                             dispatch={this.props.store.dispatch}/>
                <StudentTable students={students} findMentor={findMentor}
                              filteredStudents={filteredStudents}
                              dispatch={this.props.store.dispatch}/>
            </div>
        );
    }
});

export default content;
