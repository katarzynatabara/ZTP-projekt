import React, { Component } from 'react';
import ZwierzakListFilter from 'view/zwierzak/list/ZwierzakListFilter';
import ZwierzakListTable from 'view/zwierzak/list/ZwierzakListTable';
import ZwierzakListToolbar from 'view/zwierzak/list/ZwierzakListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class ZwierzakListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.zwierzak.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.zwierzak.list.title')}
          </PageTitle>

          <ZwierzakListToolbar />
          <ZwierzakListFilter />
          <ZwierzakListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default ZwierzakListPage;
