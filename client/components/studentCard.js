import React, {Component} from 'react';

class studentCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="student-card">
                <div className="student-card__img"></div>
                <div className="student-card__data">
                    <p>Login: { this.props.selectedStudent.login }</p>
                    <hr />
                    <p>Mentor: { this.props.selectedStudent.mentor }</p>
                    <hr />
                    <p>JS: ********//</p>
                    <hr />
                    <p>Verstka: *********.</p>
                    <hr />
                    <p>Webdev: ******</p>
                </div>
            </div>
        );
    }
}

export default studentCard;
