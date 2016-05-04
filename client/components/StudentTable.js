import React, {Component} from 'react';
import StudentLine from './studentLine';

class studentTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const visibleStudents = this.props.filteredStudents.length > 0 ?
            this.props.filteredStudents : this.props.students;

        return (
            <div className="students-table">
                <table>
                    <thead>
                    <tr>
                        <th className="students-table__th">
                            Name <span className="sorting">▲</span>
                        </th>
                        <th className="students-table__th">Login</th>
                        <th className="students-table__th">Mentor</th>
                        <th className="students-table__th">Result</th>
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
