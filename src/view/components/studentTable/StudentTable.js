import React, {Component} from 'react';
import StudentLine from '../studentLine/StudentLine';
import {filterStudents, filterMentor} from '../../actions';

class studentTable extends Component {
    constructor(props) {
        super(props);
    }

    sort(filterType, isDesc) {
        this.props.dispatch(filterStudents(filterType, isDesc));
    }

    clearMentor() {
        this.props.dispatch(filterMentor());
    }

    render() {
        const visibleStudents = this.props.filteredStudents.length > 0 ?
            this.props.filteredStudents : this.props.students;
        const clearMentorClass = this.props.findMentor ?
            'students-table__clear_visible' : 'students-table__clear_invisible';

        return (
            <div className="students-table">
                <table>
                    <thead>
                    <tr>
                        <th className="students-table__th">
                            Name
                            <span className="sorting"
                                  onClick={this.sort.bind(this, 'name', false)}>▲</span>
                            <span className="sorting"
                                  onClick={this.sort.bind(this, 'name', true)}>▼</span>
                        </th>
                        <th className="students-table__th">
                            Login
                            <span className="sorting"
                                  onClick={this.sort.bind(this, 'login', false)}>▲</span>
                            <span className="sorting"
                                  onClick={this.sort.bind(this, 'login', true)}>▼</span>
                        </th>
                        <th className="students-table__th">
                            Mentor
                            <span className={`students-table__clear ` + clearMentorClass}
                                  onClick={this.clearMentor.bind(this)}>&#10006;</span>
                        </th>
                        <th className="students-table__th">
                            Result
                            <span className="sorting"
                                  onClick={this.sort.bind(this, 'result', false)}>▲</span>
                            <span className="sorting"
                                  onClick={this.sort.bind(this, 'result', true)}>▼</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        visibleStudents.map(student => (
                            <StudentLine key={student._id} student={student}
                                         dispatch={this.props.dispatch} />
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default studentTable;
