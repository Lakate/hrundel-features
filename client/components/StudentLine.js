import React, {Component} from 'react';
import {selectStudent} from '../actions';

const GITHUB = "http://github.com/";
const GH_AVATAR = "https://avatars.githubusercontent.com/";

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
                <td>
                    <a className="student-line__links" target="_blank"
                       href={GITHUB + this.props.student.login}>
                        { this.props.student.name }
                    </a>
                </td>
                <td>
                    <a className="student-line__links" target="_blank"
                       href={GITHUB + this.props.student.login}>
                        { this.props.student.login }
                    </a>
                </td>
                <td>
                    <a className="student-line__links" target="_blank"
                       href={GITHUB + this.props.student.mentor}>
                        <img className="student-line__avatar"
                             src={ GH_AVATAR + this.props.student.mentor }
                             alt={this.props.student.mentor} title={this.props.student.mentor}/>
                    </a>
                </td>
                <td>{this.props.student.result}</td>
            </tr>
        );
    }
}

export default studentLine;
