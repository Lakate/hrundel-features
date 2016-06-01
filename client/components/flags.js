import React from 'react';
import d3 from 'd3';

export default class Flags extends React.Component {
    componentDidMount() {
        this.renderFlags();
    }

    componentDidUpdate() {
        this.renderFlags();
    }

    renderFlags() {
        // d3.select(".cool")
        //     .append("circle")
        //     .attr("class", "dot")
        //     .attr("r", 3.5)
        //     .attr("cx", new Date("2016-02-24T16:14:09Z"))
        //     .attr("cy", "150")
        //     .style("fill", "red");

        var xValues = d3.set(this.props.commentsAndCommit.map(function (d) {
            let date = new Date(d.createdAt);
            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
        })).values();

        console.log(this.props.yScale);

        var x = d3.time.scale()
            .range([this.props.padding, this.props.width - this.props.padding * 2])
            .domain(d3.extent(xValues, function (d) {
                return new Date(d);
            }));
        var y = d3.scale.ordinal()
            .domain(this.props.yScale)
            .rangePoints([this.props.height - this.props.padding, this.props.padding]);

        let valueline = d3.svg.line()
            .x(function (d) {
                return x(new Date(d.createdAt));
            })
            .y(function (d) {
                return y(d.user);
            })
            .interpolate('step');

        d3.select('.cool')
            .append('path')
            .attr('class', 'line')
            .attr('d', valueline(this.props.commentsAndCommit));
    }

    render() {
        return (
            <circle className="flags" r="3.5" cx="50" cy="30" fill="red" />
        );
    }
}
