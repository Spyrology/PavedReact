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
  },

 /* open() {
    this.setState({ showModal: this.props.showDetails });
  },*/

  render() {
  
    return (
      <div>

        <Modal show={this.state.showModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.org.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{this.props.details.position}</h4>
            <p>{this.props.details.requirements}</p>
            <p>{this.props.details.timeestimate}</p>
            <p>{this.props.details.description}</p>
            <p>{this.props.details.price}</p>

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