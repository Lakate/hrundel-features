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
        textAnchor: 'end'
    };
    const ySettings = {
        translate: `translate(${props.padding * 2}, 0)`,
        scale: props.yScale,
        orient: 'left',
        ticks: 2,
        textRotate: -80,
        dy: '-1em',
        dx: '0',
        textAnchor: 'middle'
    };

    return (
        <g className="xy-axis">
            <Axis {...xSettings}/>
            <Axis {...ySettings}/>
        </g>
    );
};
