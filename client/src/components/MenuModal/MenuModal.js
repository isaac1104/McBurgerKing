import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { toggleModal } from '../../actions';

class MenuModal extends Component {
  render() { 
    const { ui_visibility: { modal_visible }, toggleModal } = this.props;
    return (
      <Modal
        centered
        title="Basic Modal"
        visible={modal_visible}
        onOk={toggleModal}
        onCancel={toggleModal}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
  }
}

const mapStateToProps = ({ ui_visibility }) => {
  return {
    ui_visibility
  };
};

export default connect(mapStateToProps, { toggleModal })(MenuModal);