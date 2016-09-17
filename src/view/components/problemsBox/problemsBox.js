import React, {Component} from 'react';
import ProblemModal from '../problemModal/problemModal';

const GH_URFU = 'http://github.com/urfu-2015/';

class problemsBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.tasks, 'wer');

        return (
            <div>
                <p className="student-card-data_bold">{this.props.type}:</p>
                <div className="student-card-data__problems-box">
                    {
                        this.props.tasks.map(task => {
                            console.log(task.pr);
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
        );
    }
}

export default problemsBox;

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
