import React, {Component} from 'react';
import d3 from 'd3';
import XYAxis from './x-y-axis';
import StatsLine from './statsLine';
import Deadlines from './deadlines';

let xValues;

class Graph extends Component {
    constructor(props) {
        super(props);
        this.getSize = this.getSize.bind(this);
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

    render() {
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
            <g className="cool">
                <XYAxis {...styles} {...scales} ticksCount={xValues.length} />
                <StatsLine {...scales} commentsAndCommit={this.props.task.commentsAndCommits} />
                <Deadlines {...scales} startDeadline={this.props.task.startDate} />
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

    console.log(xValues);
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
