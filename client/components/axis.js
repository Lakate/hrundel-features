import React from 'react';
import d3 from 'd3';

export default class Axis extends React.Component {
    componentDidMount() {
        this.renderAxis();
    }

    componentDidUpdate() {
        this.renderAxis();
    }

    renderAxis() {
        var node = this.refs.axis;
        var axis = d3.svg.axis()
                .scale(this.props.scale)
                .orient(this.props.orient)
                .ticks(this.props.ticks)
                .outerTickSize(0);

        if (this.props.ticksFormat) {
            axis.tickFormat(this.props.ticksFormat);
        }

        d3.select(node).call(axis)
            .selectAll('text')
            .style('text-anchor', this.props.textAnchor)
            .attr('dx', this.props.dx)
            .attr('dy', this.props.dy)
            .attr('transform', () => `rotate(${this.props.textRotate})`);
    }

    render() {
        return <g className="axis" ref="axis" transform={this.props.translate}></g>;
    }
}
