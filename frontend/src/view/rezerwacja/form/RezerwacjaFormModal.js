import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import RezerwacjaForm from 'view/rezerwacja/form/RezerwacjaForm';
import RezerwacjaService from 'modules/rezerwacja/rezerwacjaService';
import Errors from 'modules/shared/error/errors';

class RezerwacjaFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await RezerwacjaService.create(data);
      const record = await RezerwacjaService.find(id);
      this.props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      this.setState({
        saveLoading: false,
      });
    }
  };

  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <Modal
        title={i18n('entities.rezerwacja.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <RezerwacjaForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default RezerwacjaFormModal;
