import React, {Component} from 'react';
import StudentLine from './studentLine';

class studentTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="students-table">
                <table>
                    <thead>
                    <tr>
                        <th className="students-table__th">Name</th>
                        <th className="students-table__th">Mentor</th>
                        <th className="students-table__th">Stars</th>
                        <th className="students-table__th">Result</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.students.map(student => (
                        <StudentLine student={student} dispatch={this.props.dispatch} />
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default studentTable;
