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
                    <p>Kate Latypova</p>
                    <hr />
                    <p>Login: Lakate</p>
                    <hr />
                    <p>Mentor: i4got10</p>
                    <hr />
                    <p>JS: ********//</p>
                    <hr />
                    <p>JS: *********.</p>
                    <hr />
                    <p>JS: ******</p>
                </div>
            </div>
        );
    }
}

export default studentCard;
