import React, {Component} from 'react';

class problemDetails extends Component {
    constructor(props) {
        super(props);
        this.convertToDate = this.convertToDate.bind(this);
        this.rightAnswer = this.rightAnswer.bind(this);
    }

    rightAnswer(param, variants) {
        if (param === 1) {
            return param + ' ' + variants.first + ' ';
        } else if (param < 5) {
            return param + ' ' + variants.second + ' ';
        } else {
            return param + ' ' + variants.third + ' ';
        }
    }

    convertToDate(msTime) {
        if (!msTime || msTime <= 0) {
            return '0 дней 0 часов 0 минут';
        }

        let time = msTime / 1000;
        let minuteTime = time / 60;
        let hourTime = minuteTime / 60;

        let days = (hourTime / 24) >> 0;
        console.log(days);
        let hours = (hourTime - days * 24) >> 0;
        console.log(hours);
        let minutes = Math.round(minuteTime - days * 24 * 60 - hours * 60);
        console.log(minutes);

        return this.rightAnswer(days, {first: 'день', second: 'дня', third: 'дней'}) +
            this.rightAnswer(hours, {first: 'час', second: 'часа', third: 'часов'}) +
            this.rightAnswer(minutes, {first: 'минута', second: 'минуты', third: 'минут'});
    }

    render() {
        return (
            <div className="task-details">
                <div className="task-details__title">
                    <h3>Детали:</h3>
                </div>
                <div className="task-details__details">
                    <div className="task-details__details-time">
                        <div className="task-details__detail-name a">
                            Оставшееся время:
                        </div>
                        <div className="task-details__detail-name">
                            {this.props.student}:
                        </div>
                        <div className="task-details__detail-content">
                            {this.convertToDate(this.props.task.reserveDays[this.props.student])}
                        </div>
                        <div className="task-details__detail-name">
                            {this.props.task.mentor}:
                        </div>
                        <div className="task-details__detail-content">
                            {this.convertToDate(
                                this.props.task.reserveDays[this.props.task.mentor])}
                        </div>
                    </div>
                    <div className="task-details__detail-name b">
                        Текущий ход у:
                    </div>
                    <div className="task-details__detail-content">
                        {this.props.task.deadlineUser}
                    </div>
                    <div className="task-details__detail-name b">
                        Баллы:
                    </div>
                    <div className="task-details__detail-content">
                        1
                    </div>
                </div>
            </div>
            );
    }
}

export default problemDetails;
