import React from 'react';
import d3 from 'd3';

export default class Deadlines extends React.Component {
    constructor(props) {
        super(props);
        this.getCoords = this.getCoords.bind(this);
        this.getStartDeadline = this.getStartDeadline.bind(this);
    }

    componentDidMount() {
        let tooltip = d3.select('.tooltip');
        let startDeadline = this.props.startDeadline;

        d3.select('.cool')
            .selectAll('.start-deadline')
            .on('mouseover', function () {
                tooltip.transition()
                    .duration(200)
                    .style('opacity', 0.9);
                tooltip.html('<div class=\'tooltip-data\'>' +
                    (d3.select(this).attr('data-info')) + '</div>' +
                    '<div>' + startDeadline.replace(/[A-Z]/g, ' ') + '</div>')
                    .style('left', (d3.select(this).attr('data-cx') - 90) + 'px')
                    .style('top', (d3.select(this).attr('data-cy') - 30) + 'px');
            })
            .on('mouseout', function () {
                tooltip.transition()
                    .duration(500)
                    .style('opacity', 0);
            });
    }

    getCoords(point) {
        let xCoords = this.props.xScale(new Date(point));
        return {cx: xCoords, cy: 150};
    }

    getStartDeadline(point) {
        let date = new Date(point);
        date.setDate(date.getDate() + 7);
        return date;
    }

    render() {
        let startDeadline = this.getStartDeadline(this.props.startDeadline);
        let {cx, cy} = this.getCoords(startDeadline);
        let startDeadlinePath = `M ${cx},${cy} L${cx},${cy - 20} 
                L${cx + 7},${cy - 15} L${cx},${cy - 10}`;

        return (
            <g>
                <path className="start-deadline" d={startDeadlinePath} data-cx={cx} data-cy={cy}
                      data-info="start deadline"
                      fill="red" stroke-width="3" stroke="red"/>
            </g>
        );
    }
}
