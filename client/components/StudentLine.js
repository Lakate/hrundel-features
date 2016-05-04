import React, {Component} from 'react';
import {selectStudent} from '../actions';

const GITHUB = "http://github.com/";
const GH_AVATAR = "https://avatars.githubusercontent.com/";

class studentLine extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.getResults = this.getResults.bind(this);
    }

    handleClick() {
        this.props.dispatch(selectStudent(this.props.student));
    }

    getResults() {
        const allTasks = this.props.student.tasks;
        let result = 0;
        for (let i in allTasks) {
            if (allTasks[i].status === 'accepted') {
                result += 1;
            }
            if (allTasks[i].status === 'half-points') {
                result += 0.5;
            }
        }

        return result;
    }

    render() {
        const results = this.getResults();

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
                <td>{results}</td>
            </tr>
        );
    }
}

export default studentLine;
