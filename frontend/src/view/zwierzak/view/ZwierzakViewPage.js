import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ZwierzakView from 'view/zwierzak/view/ZwierzakView';
import { i18n } from 'i18n';
import actions from 'modules/zwierzak/view/zwierzakViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/zwierzak/view/zwierzakViewSelectors';
import ZwierzakViewToolbar from 'view/zwierzak/view/ZwierzakViewToolbar';

class ZwierzakPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.zwierzak.menu'), '/zwierzak'],
            [i18n('entities.zwierzak.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.zwierzak.view.title')}
          </PageTitle>

          <ZwierzakViewToolbar match={this.props.match} />

          <ZwierzakView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(ZwierzakPage);
