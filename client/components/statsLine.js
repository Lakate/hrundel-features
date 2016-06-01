import React from 'react';
import d3 from 'd3';

export default class StatsLine extends React.Component {
    constructor(props) {
        super(props);
        this.renderLine = this.renderLine.bind(this);
    }

    renderLine() {
        let xScale = this.props.xScale;
        let yScale = this.props.yScale;

        let valueline = d3.svg.line()
            .x(commentOrCommit => xScale(new Date(commentOrCommit.createdAt)))
            .y(commentOrCommit => yScale(commentOrCommit.user))
            .interpolate('step');

        return valueline(this.props.commentsAndCommit);
    }

    render() {
        let d = this.renderLine();

        return (
            <path className="stats-line" d={d} />
        );
    }
}
