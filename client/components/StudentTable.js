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
                        <th>Name</th>
                        <th>Mentor</th>
                        <th>Stars</th>
                        <th>Result</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.students.map(student => (
                        <StudentLine student={student} />
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default studentTable;
