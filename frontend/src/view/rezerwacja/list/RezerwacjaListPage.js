import React, { Component } from 'react';
import RezerwacjaListFilter from 'view/rezerwacja/list/RezerwacjaListFilter';
import RezerwacjaListTable from 'view/rezerwacja/list/RezerwacjaListTable';
import RezerwacjaListToolbar from 'view/rezerwacja/list/RezerwacjaListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class RezerwacjaListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.rezerwacja.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.rezerwacja.list.title')}
          </PageTitle>

          <RezerwacjaListToolbar />
          <RezerwacjaListFilter />
          <RezerwacjaListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default RezerwacjaListPage;
