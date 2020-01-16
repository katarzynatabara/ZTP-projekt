import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/zwierzak/list/zwierzakListActions';
import destroyActions from 'modules/zwierzak/destroy/zwierzakDestroyActions';
import selectors from 'modules/zwierzak/list/zwierzakListSelectors';
import destroySelectors from 'modules/zwierzak/destroy/zwierzakDestroySelectors';
import model from 'modules/zwierzak/zwierzakModel';
import zwierzakSelectors from 'modules/zwierzak/zwierzakSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import UserListItem from 'view/iam/list/users/UserListItem';

const { fields } = model;

class ZwierzakListTable extends Component {
  handleTableChange = (pagination, filters, sorter) => {
    const { dispatch } = this.props;

    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  doDestroy = (id) => {
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(id));
  };

  columns = [
    fields.wlasciciel.forTable({
      render: (value) => <UserListItem value={value} />,
    }),
    fields.imie.forTable(),
    fields.typ.forTable(),
    fields.rasa.forTable(),
    fields.rozmiar.forTable(),
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/zwierzak/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/zwierzak/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )}
          {this.props.hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => this.doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                {i18n('common.destroy')}
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  rowSelection = () => {
    return {
      selectedRowKeys: this.props.selectedKeys,
      onChange: (selectedRowKeys) => {
        const { dispatch } = this.props;
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  render() {
    const { pagination, rows, loading } = this.props;

    return (
      <TableWrapper>
        <Table
          rowKey="id"
          loading={loading}
          columns={this.columns}
          dataSource={rows}
          pagination={pagination}
          onChange={this.handleTableChange}
          rowSelection={this.rowSelection()}
          scroll={{ x: true }}
        />
      </TableWrapper>
    );
  }
}

function select(state) {
  return {
    loading:
      selectors.selectLoading(state) ||
      destroySelectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
    hasPermissionToEdit: zwierzakSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: zwierzakSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(ZwierzakListTable);
