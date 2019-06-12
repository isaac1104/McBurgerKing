import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Spin, Icon } from 'antd';
import { toggleModal } from '../../actions';
import styles from './MenuModal.module.css';

class MenuModal extends Component {
  capitalizeFirstLetter(string) {
    return `${string.split('')[0].toUpperCase()}${string.slice(1)}`;
  }

  renderModal() {
    const { ui_visibility: { modal_visible }, menu: { is_fetching, data: { items, type } }, toggleModal } = this.props;
    return (
      <Modal
        centered
        title={is_fetching || !items ? 'Fetching Menu...' : this.capitalizeFirstLetter(type)}
        visible={modal_visible}
        onOk={toggleModal}
        onCancel={toggleModal}
      >
        {is_fetching || !items ? (
          <div className={styles.MenuModalLoaderContainer}>
            <Spin
              indicator={
                <Icon
                  type='loading'
                  className={styles.ModalLoader}
                />
              }
            />
          </div>
        ) : (
            items.map(({ id, name, price, img }) => (
              <div key={id}>
                <img
                  src={img}
                  alt={name}
                  className={styles.MenuImage}
                />
                <p>{name} - ${price}</p>
              </div>
            ))
          )}
      </Modal>
    )
  }

  render() {
    console.log(this.props.menu);
    return (
      <>
        {this.renderModal()}
      </>
    );
  }
}

const mapStateToProps = ({ menu, ui_visibility }) => {
  return {
    menu,
    ui_visibility
  };
};

export default connect(mapStateToProps, { toggleModal })(MenuModal);