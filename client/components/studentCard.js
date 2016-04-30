import React, {Component} from 'react';

const GITHUB = "http://github.com/";
const GH_URFU = "http://github.com/urfu-2015/";

class studentCard extends Component {
    constructor(props) {
        super(props);
        this.getTasks = this.getTasks.bind(this);
    }

    getTasks(type) {
        const allTasks = this.props.selectedStudent.tasks;
        let tasks = [];
        for (let i in allTasks) {
            if (allTasks[i].taskType === type) {
                tasks[allTasks[i].number] = allTasks[i];
            }
        }

        for (let i = 1; i < tasks.length; i++) {
            if (!tasks[i]) {
                tasks[i] = {status: 'failed'};
            }
        }
        return tasks;
    }

    render() {
        const verstka = this.getTasks('verstka');
        const javascript = this.getTasks('javascript');
        const webdev = this.getTasks('webdev');

        return (
            <div className="student-card">
                <div className="student-card__img">
                    <img src={ this.props.selectedStudent.avatar } />
                </div>
                <div className="student-card-data student-card__data">
                    <p>
                        <span className="student-card-data_bold">Login:</span>
                        <a className="student-card-data__links"
                           href={GITHUB + this.props.selectedStudent.login}>
                            { this.props.selectedStudent.login }
                        </a>
                    </p>
                    <hr />
                    <p>
                        <span className="student-card-data_bold">Mentor:</span>
                        <a className="student-card-data__links"
                           href={GITHUB + this.props.selectedStudent.mentor}>
                            { this.props.selectedStudent.mentor }
                        </a>
                    </p>
                    <hr />
                    <p>
                        <span className="student-card-data_bold">JS:</span>
                        {
                            javascript.map(task => {
                                if (task.pr) {
                                    const href = GH_URFU +
                                        `${task.taskType}-tasks-${task.number}/pull/${task.pr}`;
                                    return (
                                        <a className="student-card-data__links"
                                           href={href} target="_blank">
                                            {getIcon(task.status)}
                                        </a>
                                    );
                                } else {
                                    return (
                                        <span className="student-card-data__task-span">
                                            {getIcon(task.status)}
                                        </span>
                                    );
                                }
                            })
                        }
                    </p>
                    <hr />
                    <p>
                        <span className="student-card-data_bold">Verstka:</span>
                        {
                            verstka.map(task => {
                                if (task.pr) {
                                    const href = GH_URFU +
                                        `${task.taskType}-tasks-${task.number}/pull/${task.pr}`;
                                    return (
                                        <a className="student-card-data__links"
                                           href={href} target="_blank">
                                            {getIcon(task.status)}
                                        </a>
                                    );
                                } else {
                                    return (
                                        <span className="student-card-data__task-span">
                                            {getIcon(task.status)}
                                        </span>
                                    );
                                }
                            })
                        }
                    </p>
                    <hr />
                    <p>
                        <span className="student-card-data_bold">Webdev:</span>
                        {
                            webdev.map(task => {
                                if (task.pr) {
                                    const href = GH_URFU +
                                        `${task.taskType}-tasks-${task.number}/pull/${task.pr}`;
                                    return (
                                        <a className="student-card-data__links"
                                           href={href} target="_blank">
                                            {getIcon(task.status)}
                                        </a>
                                    );
                                } else {
                                    return (
                                        <span className="student-card-data__task-span">
                                            {getIcon(task.status)}
                                        </span>
                                    );
                                }
                            })
                        }
                    </p>
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
        case 'half-points':
            return '/';
        case 'pending':
            return '•';
        case 'failed':
            return '✗';
        default:
            return '✗';
    }
}
