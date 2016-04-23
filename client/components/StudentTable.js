import React from 'react';
import StudentLine from './studentLine';

const content = React.createClass({
    render: function () {
        // const {students, selectedStudentId} = this.props.store.getState();
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
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    <StudentLine />
                    </tbody>
                </table>
            </div>
        );
    }
});

export default content;
