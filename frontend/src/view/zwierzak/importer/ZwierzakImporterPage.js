import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/zwierzak/importer/zwierzakImporterSelectors';
import actions from 'modules/zwierzak/importer/zwierzakImporterActions';
import fields from 'modules/zwierzak/importer/zwierzakImporterFields';

class ZwierzakImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('entities.zwierzak.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [
              i18n('entities.zwierzak.menu'),
              '/zwierzak',
            ],
            [
              i18n(
                'entities.zwierzak.importer.title',
              ),
            ],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n(
              'entities.zwierzak.importer.title',
            )}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default ZwierzakImportPage;
