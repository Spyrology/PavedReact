import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import FileButtons from '../file-buttons/file-buttons';

const DetailsModal = React.createClass({

  getInitialState() {
    return { showModal: this.props.showDetails };
  },

  close() {
    this.setState({ showModal: false });
    this.props.callbackParent();
  },

  componentWillUnmount() {
    this.props.callbackParent();
  },

  render() {
  
    return (
      <div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title><h1>{this.props.org.name}</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>{this.props.details.position}</h3>
            <hr />
            <p>Minimum Requirements: {this.props.details.requirements}</p>
            <p>Time estimate: {this.props.details.timeestimate}</p>
            <p>Description: {this.props.details.description}</p>
            <p>${this.props.details.price}</p>

            <hr />
          <FileButtons org={this.props.org} details={this.props.details} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default DetailsModal;