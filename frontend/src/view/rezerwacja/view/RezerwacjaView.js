import model from 'modules/rezerwacja/rezerwacjaModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import UserViewItem from 'view/iam/view/UserViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';
import FilesViewItem from 'view/shared/view/FilesViewItem';
import ZwierzakViewItem from 'view/zwierzak/view/ZwierzakViewItem';

const { fields } = model;

class RezerwacjaView extends Component {
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

        <ZwierzakViewItem
          label={fields.zwierzak.label}
          value={fields.zwierzak.forView(record.zwierzak)}
        />

        <TextViewItem
          label={fields.przyjazd.label}
          value={fields.przyjazd.forView(record.przyjazd)}
        />

        <TextViewItem
          label={fields.wyjazd.label}
          value={fields.wyjazd.forView(record.wyjazd)}
        />

        <TextViewItem
          label={fields.uwagiKlienta.label}
          value={fields.uwagiKlienta.forView(record.uwagiKlienta)}
        />

        <TextViewItem
          label={fields.uwagiPracownika.label}
          value={fields.uwagiPracownika.forView(record.uwagiPracownika)}
        />

        <ImagesViewItem
          label={fields.zdjecia.label}
          value={fields.zdjecia.forView(record.zdjecia)}
        />

        <TextViewItem
          label={fields.status.label}
          value={fields.status.forView(record.status)}
        />

        <TextViewItem
          label={fields.anulowanieUwagi.label}
          value={fields.anulowanieUwagi.forView(record.anulowanieUwagi)}
        />

        <TextViewItem
          label={fields.oplata.label}
          value={fields.oplata.forView(record.oplata)}
        />

        <FilesViewItem
          label={fields.rachunek.label}
          value={fields.rachunek.forView(record.rachunek)}
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

export default RezerwacjaView;
