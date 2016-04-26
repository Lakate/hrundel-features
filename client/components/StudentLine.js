import React, {Component} from 'react';

class studentLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className="student-line">
                <td>{ this.props.student.login }</td>
                <td>{ this.props.student.mentor }</td>
                <td>23</td>
                <td>36</td>
            </tr>
        );
    }
}

export default studentLine;
