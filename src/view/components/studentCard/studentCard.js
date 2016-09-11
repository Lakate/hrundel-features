import React, {Component} from 'react';
import ProblemModal from '../problemModal/problemModal';

const GITHUB = 'http://github.com/';
const GH_URFU = 'http://github.com/urfu-2015/';

class studentCard extends Component {
    constructor(props) {
        super(props);
        this.getTasks = this.getTasks.bind(this);
    }

    getTasks() {
        const allTasks = this.props.selectedStudent.tasks;
        let tasks = [];
        for (let i in allTasks) {
            tasks[allTasks[i].number] = allTasks[i];
        }

        for (let i = 1; i <= this.props.taskCounter; i++) {
            if (!tasks[i]) {
                tasks[i] = {status: 'failed'};
            }
        }
        return tasks;
    }

    render() {
        const webdev = this.getTasks();

        return (
            <div id="student-card" className="student-card">
                <div className="student-card__img">
                    <img src={ this.props.selectedStudent.avatar }
                         alt={this.props.selectedStudent.login}
                         title={this.props.selectedStudent.login} />
                </div>
                <div className="student-card-data student-card__data">
                    <p>
                        <span className="student-card-data_bold">Name:</span>
                        <a className="student-card-data__links" target="_blank"
                           href={GITHUB + this.props.selectedStudent.login}>
                            { this.props.selectedStudent.name }
                        </a>
                    </p>
                    <hr />
                    <p>
                        <span className="student-card-data_bold">Login:</span>
                        <a className="student-card-data__links" target="_blank"
                           href={GITHUB + this.props.selectedStudent.login}>
                            { this.props.selectedStudent.login }
                        </a>
                    </p>
                    <hr />
                    <p>
                        <span className="student-card-data_bold">Mentor:</span>
                        <a className="student-card-data__links" target="_blank"
                           href={GITHUB + this.props.selectedStudent.mentor}>
                            { this.props.selectedStudent.mentor }
                        </a>
                    </p>
                    <hr />
                    <div>
                        <p className="student-card-data_bold">Webdev:</p>
                        <div className="student-card-data__problems-box">
                            {
                                webdev.map(task => {
                                    if (task.pr) {
                                        const href = GH_URFU +
                                            `${task.taskType}-tasks-${task.number}/pull/${task.pr}`;
                                        const disabled = false;
                                        return (
                                            <div className="student-card-data__problem">
                                                <a className="student-card-data__links"
                                                   href={href} target="_blank">
                                                    {getIcon(task.status)}
                                                </a>
                                                <ProblemModal disabled={disabled} task={task}
                                                    student={this.props.selectedStudent.login}
                                                    dispatch={this.props.dispatch} />
                                            </div>
                                        );
                                    } else {
                                        const disabled = true;
                                        return (
                                            <div className="student-card-data__problem">
                                                <span className="student-card-data__span">
                                                    {getIcon(task.status)}
                                                </span>
                                                <ProblemModal disabled={disabled} />
                                            </div>
                                        );
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default studentCard;

function getIcon(status) {
    switch (status) {
        case 'accepted':
            return '✓';
        case 'half-accepted':
            return '/';
        case 'pending':
            return '•';
        case 'failed':
            return '✗';
        default:
            return '✗';
    }
}
