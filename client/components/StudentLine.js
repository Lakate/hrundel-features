import React, {Component} from 'react';
import {selectStudent} from '../actions';

class studentLine extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatch(selectStudent(this.props.student));
    }

    render() {
        return (
            <tr className="student-line" onClick={this.handleClick}>
                <td>{ this.props.student.login }</td>
                <td>{ this.props.student.mentor }</td>
                <td>23</td>
                <td>36</td>
            </tr>
        );
    }
}

export default studentLine;
