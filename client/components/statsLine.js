import React from 'react';
import d3 from 'd3';

export default class StatsLine extends React.Component {
    constructor(props) {
        super(props);
        this.renderLine = this.renderLine.bind(this);
    }

    componentDidMount() {
        let xScale = this.props.xScale;
        let yScale = this.props.yScale;

        let tooltip = d3.select('.tooltip');

        d3.select('.graph')
            .selectAll('.dot')
            .data(this.props.commentsAndCommit)
            .enter().append('circle')
            .attr('r', 3)
            .attr('cx', commentOrCommit => xScale(new Date(commentOrCommit.createdAt)))
            .attr('cy', commentOrCommit => yScale(commentOrCommit.user))
            .on('mouseover', function (d) {
                tooltip.transition()
                    .duration(200)
                    .style('opacity', 0.9);
                tooltip.html('<div class=\'tooltip-data\'>' + d.body + '</div>' +
                    '<div>' + d.createdAt.replace(/[A-Z]/g, ' ').replace(/\..+/g, ' ') + '</div>')
                    .style('left', (d3.select(this).attr('cx') - 90) + 'px')
                    .style('top', (d3.select(this).attr('cy') - 30) + 'px');
            })
            .on('mouseout', () => {
                tooltip.transition()
                    .duration(500)
                    .style('opacity', 0);
            });
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
