import model from 'modules/zwierzak/zwierzakModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import UserViewItem from 'view/iam/view/UserViewItem';
import RezerwacjaViewItem from 'view/rezerwacja/view/RezerwacjaViewItem';

const { fields } = model;

class ZwierzakView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <UserViewItem
          label={fields.wlasciciel.label}
          value={fields.wlasciciel.forView(record.wlasciciel)}
        />

        <TextViewItem
          label={fields.imie.label}
          value={fields.imie.forView(record.imie)}
        />

        <TextViewItem
          label={fields.typ.label}
          value={fields.typ.forView(record.typ)}
        />

        <TextViewItem
          label={fields.rasa.label}
          value={fields.rasa.forView(record.rasa)}
        />

        <TextViewItem
          label={fields.rozmiar.label}
          value={fields.rozmiar.forView(record.rozmiar)}
        />

        <RezerwacjaViewItem
          label={fields.rezerwacja.label}
          value={fields.rezerwacja.forView(record.rezerwacja)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </ViewWrapper>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default ZwierzakView;
