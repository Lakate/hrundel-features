import React, {Component} from 'react';
import {Button, Modal, Glyphicon} from 'react-bootstrap';
import {getCommitsAndComments} from '../actions';
import d3 from 'd3';
import XYAxis from './x-y-axis';
import Flags from './flags';

class problemModal extends Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.getSize = this.getSize.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    getSize() {
        if (document.body.clientWidth > 767) {
            // ширина modal - padding-15
            return 600 - 30;
        } else {
            // width - margin=10 - padding=15
            return document.body.clientWidth - 20 - 30;
        }
    }

    handleClose() {
        this.setState({showModal: false});
    }

    handleOpen() {
        // this.props.dispatch(getCommitsAndComments(this.props.task, this.props.student));
        this.setState({showModal: true});
    }

    render() {
        if (this.props.disabled) {
            return (
                <Button className="btn-default problem-modal"
                        bsSize="xsmall" disabled>
                    <Glyphicon glyph="stats" />
                </Button>
            );
        } else {
            const taskName = `${this.props.task.taskType}-tasks-${this.props.task.number}`;
            const styles = {
                width: this.getSize() || 500,
                height: 300,
                padding: 20
            };
            const scales = {xScale: xScale(styles, this.props.task.commentsAndCommits),
                yScale: yScale(styles, this.props.student, this.props.task.mentor)};
            return (
                <div className="problem-modal">
                    <Button className="btn-default"
                            bsSize="xsmall" onClick={this.handleOpen}>
                        <Glyphicon glyph="stats" />
                    </Button>
                    <Modal show={this.state.showModal} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{taskName}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <svg className="cool" width="100%" height="300px">
                                <XYAxis {...styles} {...scales} />
                                <Flags {...styles}
                                    commentsAndCommit={this.props.task.commentsAndCommits}
                                    yScale={[this.props.student, this.props.task.mentor]} />
                            </svg>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            );
        }
    }
}

export default problemModal;

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props, commentsAndCommits) => {
    let xValues = d3.set(commentsAndCommits.map(function (d) {
        let date = new Date(d.createdAt);
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    })).values();

    return d3.time.scale()
        .domain(d3.extent(xValues, function (d) {
            return new Date(d);
        }))
        .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props, student, mentor) => {
    return d3.scale.ordinal()
        .rangePoints([props.height - props.padding, props.padding])
        .domain([student, mentor]);
};
