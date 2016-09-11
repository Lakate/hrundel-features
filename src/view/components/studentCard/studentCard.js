import React, {Component} from 'react';
import ProblemBox from '../problemsBox/problemsBox';

const GITHUB = 'http://github.com/';
const TASKS_TYPES = ['webdev'];  // ['webdev', 'verstka', 'javascript'];

    class studentCard extends Component {
    constructor(props) {
        super(props);
        this.getTasks = this.getTasks.bind(this);
    }

    getTasks(type) {
        let allTasks = [];
        if (this.props.selectedStudent.tasks) {
            allTasks = this.props.selectedStudent.tasks.filter(task => {
                return task.taskType === type;
            });
        }

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
        const tasks = TASKS_TYPES.map(type => this.getTasks(type));

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
                        {
                            tasks.map((task, i) => {
                                return (
                                    <ProblemBox tasks={task} type={TASKS_TYPES[i]}
                                                selectedStudent={this.props.selectedStudent}
                                                dispatch={this.props.dispatch}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default studentCard;
