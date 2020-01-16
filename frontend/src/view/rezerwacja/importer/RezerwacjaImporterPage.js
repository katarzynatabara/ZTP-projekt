import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/rezerwacja/importer/rezerwacjaImporterSelectors';
import actions from 'modules/rezerwacja/importer/rezerwacjaImporterActions';
import fields from 'modules/rezerwacja/importer/rezerwacjaImporterFields';

class RezerwacjaImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('entities.rezerwacja.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [
              i18n('entities.rezerwacja.menu'),
              '/rezerwacja',
            ],
            [
              i18n(
                'entities.rezerwacja.importer.title',
              ),
            ],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n(
              'entities.rezerwacja.importer.title',
            )}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default RezerwacjaImportPage;
