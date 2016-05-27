import React, {Component} from 'react';
import {Button, Modal, Glyphicon} from 'react-bootstrap';

class problemModal extends Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({showModal: false});
    }

    handleOpen() {
        console.log("ASDFGHJ");
        this.setState({showModal: true});
    }

    render() {
        if (this.props.disabled) {
            return (
                <Button className="btn-default"
                        bsSize="xsmall" disabled>
                    <Glyphicon glyph="stats" />
                </Button>
            );
        } else {
            return (
                <div>
                    <Button className="btn-default"
                            bsSize="xsmall" onClick={this.handleOpen}>
                        <Glyphicon glyph="stats" />
                    </Button>
                    <Modal show={this.state.showModal} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
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
