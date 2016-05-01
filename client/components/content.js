import React from 'react';
import Header from './header';
import Search from './search';
import StudentTable from './studentTable';
import StudentCard from './studentCard';
import {refreshStudent, selectStudent} from '../actions';

const content = React.createClass({
    componentWillMount: function () {
        fetch('/students')
            .then(response => response.json())
            .then(data => {
                this.props.store.dispatch(selectStudent(data.students[0]));
                return data;
            })
            .then(data => {
                data.students.forEach(student => {
                    this.props.store.dispatch(refreshStudent(student));
                });
            });
    },

    render: function () {
        const {students, filteredStudents, foundData, selectedStudent} =
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
                <StudentCard selectedStudent={selectedStudent} />
                <StudentTable students={students} filteredStudents={filteredStudents}
                              dispatch={this.props.store.dispatch}/>
            </div>
        );
    }
});

export default content;
