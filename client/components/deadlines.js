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

        d3.select('.graph')
            .selectAll('.deadline')
            .on('mouseover', function () {
                let selectedThis = d3.select(this);

                tooltip.transition()
                    .duration(200)
                    .style('opacity', 0.9);
                tooltip.html('<div class=\'tooltip-data\'>' +
                    (selectedThis.attr('data-info')) + '</div>' +
                    '<div>' + selectedThis.attr('data-date').replace(/[A-Z]/g, ' ')
                        .replace(/\..+/g, ' ') + '</div>')
                    .style('left', (selectedThis.attr('data-cx') - 90) + 'px')
                    .style('top', (selectedThis.attr('data-cy') - 30) + 'px');
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
        let start = this.getCoords(startDeadline);
        let finish = this.getCoords(this.props.finishDeadlineDate);

        let startDeadlinePath = `M ${start.cx},${start.cy} L${start.cx},${start.cy - 20} 
                L${start.cx + 7},${start.cy - 15} L${start.cx},${start.cy - 10}`;
        let finishDeadlinePath = `M ${finish.cx},${finish.cy} L${finish.cx},${finish.cy - 20} 
                L${finish.cx + 7},${finish.cy - 15} L${finish.cx},${finish.cy - 10}`;

        return (
            <g>
                <path className="deadline" d={startDeadlinePath} data-cx={start.cx}
                      data-cy={start.cy} data-info="start deadline"
                      data-date={this.props.startDeadline}
                      fill="#f00" stroke-width="3" stroke="#f00"/>
                <path className="deadline" d={finishDeadlinePath} data-cx={finish.cx}
                      data-cy={finish.cy} data-info={`${this.props.finishDeadlineUser} deadline`}
                      data-date={(new Date(this.props.finishDeadlineDate)).toISOString()}
                      fill="#008000" stroke-width="3" stroke="#008000"/>
            </g>
        );
    }
}
