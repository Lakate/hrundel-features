import React, {Component} from 'react';
import d3 from 'd3';
import XYAxis from './x-y-axis';
import StatsLine from './statsLine';
import Deadlines from './deadlines';

let xValues;
let currentDeadline;

const TWOWEEKMS = 14 * 24 * 60 * 60 * 1000;
const THREEWEEKMS = 21 * 24 * 60 * 60 * 1000;

class Graph extends Component {
    constructor(props) {
        super(props);
        this.getSize = this.getSize.bind(this);
        this.getDeadline = this.getDeadline.bind(this);
    }

    getSize() {
        if (document.body.clientWidth > 767) {
            // ширина modal - padding=15
            return 600 - 30;
        } else {
            // width - margin=10 - padding=15
            return document.body.clientWidth - 20 - 30;
        }
    }

    getDeadline() {
        let currentDate = Date.parse(this.props.task.startDate);

        let time = {};
        let last = this.props.task.commentsAndCommits.length - 1;

        this.props.task.commentsAndCommits.forEach(commentOrCommit => {
            if (time[commentOrCommit.user]) {
                time[commentOrCommit.user] += Date.parse(commentOrCommit.createdAt) - currentDate;
            } else {
                time[commentOrCommit.user] = Date.parse(commentOrCommit.createdAt) - currentDate;
            }
            currentDate = Date.parse(commentOrCommit.createdAt);
        });

        let taskCountDays;
        if (this.props.task.number === 5 || this.props.task.number === 7) {
            taskCountDays = THREEWEEKMS;
        } else {
            taskCountDays = TWOWEEKMS;
        }
        for (let user in time) {
            if (user !== this.props.task.commentsAndCommits[last].user) {
                return new Date(Date.parse(this.props.task.commentsAndCommits[last].createdAt) +
                    (taskCountDays - time[user]));
            }
        }
    }

    render() {
        currentDeadline = this.getDeadline();

        const styles = {
            width: this.getSize() || 500,
            height: 300,
            padding: 20
        };

        const scales = {xScale: xScale(styles,
            this.props.task.commentsAndCommits,
            this.props.task.startDate),
            yScale: yScale(styles, this.props.student, this.props.task.mentor)};

        return (
            <g className="graph">
                <XYAxis {...styles} {...scales} ticksCount={xValues.length} />
                <StatsLine {...scales} startDeadline={this.props.task.startDate}
                                       commentsAndCommit={this.props.task.commentsAndCommits} />
                <Deadlines {...scales} startDeadline={this.props.task.startDate}
                                       finishDeadline={currentDeadline} />
            </g>
        );
    }
}

export default Graph;

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props, commentsAndCommits, startDate) => {
    xValues = [parseDate(startDate)];
    xValues = d3.set(xValues.concat(commentsAndCommits.map(commentOrCommit =>
        parseDate(commentOrCommit.createdAt))))
        .values();
    xValues.push(currentDeadline);

    return d3.time.scale()
            .domain(d3.extent(xValues, data => new Date(data)))
            .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props, student, mentor) => {
    return d3.scale.ordinal()
        .rangePoints([props.height - props.padding, props.padding])
        .domain([student, mentor]);
};

function parseDate(dateString) {
    let date = new Date(dateString);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
