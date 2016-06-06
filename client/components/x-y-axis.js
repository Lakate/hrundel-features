import React from 'react';
import Axis from './axis';

export default props => {
    const xSettings = {
        translate: `translate(${props.padding}, ${props.height / 2})`,
        scale: props.xScale,
        orient: 'bottom',
        ticks: Math.max(props.ticksCount, 14),
        ticksFormat: d3.time.format('%d.%m'),
        textRotate: -90,
        dy: '.1em',
        dx: '-.8em',
        textAnchor: 'end',
        flagForYTicks: false
    };
    const ySettings = {
        translate: `translate(${props.padding * 2}, 0)`,
        scale: props.yScale,
        orient: 'left',
        ticks: 2,
        textRotate: 0,
        dy: '-1em',
        dx: '1em',
        textAnchor: 'middle',
        flagForYTicks: true
    };

    return (
        <g className="xy-axis">
            <Axis {...xSettings}/>
            <Axis {...ySettings} student={props.student} />
        </g>
    );
};
