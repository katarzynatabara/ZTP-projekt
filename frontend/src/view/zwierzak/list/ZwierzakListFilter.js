import { Button, Col, Form, Row } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/zwierzak/list/zwierzakListActions';
import selectors from 'modules/zwierzak/list/zwierzakListSelectors';
import model from 'modules/zwierzak/zwierzakModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilterWrapper, {
  formItemLayout,
} from 'view/shared/styles/FilterWrapper';
import FormFilterSchema from 'view/shared/form/formFilterSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'view/shared/form/items/DatePickerRangeFormItem';
import UserAutocompleteFormItem from 'view/iam/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';

const { fields } = model;

const schema = new FormFilterSchema([
  fields.wlasciciel,
  fields.imie,
  fields.typ,
  fields.rasa,
  fields.rozmiar,
]);

class ZwierzakListFilter extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch(this.initialFilter()));
  }

  initialFilter = () => {
    return schema.initialValues(
      this.props.filter,
      this.props.location,
    );
  };

  handleSubmit = (values) => {
    const valuesToSubmit = schema.cast(values);
    const { dispatch } = this.props;
    dispatch(actions.doFetch(valuesToSubmit));
  };

  handleReset = (form) => {
    form.setValues({});
    const { dispatch } = this.props;
    dispatch(actions.doReset());
  };

  render() {
    const { loading } = this.props;

    return (
      <FilterWrapper>
        <Formik
          initialValues={this.initialFilter()}
          validationSchema={schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                <Row gutter={24}>
                  <Col md={24} lg={12}>
                    <UserAutocompleteFormItem
                      name={fields.wlasciciel.name}
                      label={fields.wlasciciel.label}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <InputFormItem
                      name={fields.imie.name}
                      label={fields.imie.label}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <SelectFormItem
                      name={fields.typ.name}
                      label={fields.typ.label}
                      options={fields.typ.options.map(
                        (item) => ({
                          value: item.id,
                          label: item.label,
                        }),
                      )}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <InputFormItem
                      name={fields.rasa.name}
                      label={fields.rasa.label}
                      layout={formItemLayout}
                    />
                  </Col>
                  <Col md={24} lg={12}>
                    <SelectFormItem
                      name={fields.rozmiar.name}
                      label={fields.rozmiar.label}
                      options={fields.rozmiar.options.map(
                        (item) => ({
                          value: item.id,
                          label: item.label,
                        }),
                      )}
                      layout={formItemLayout}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="filter-buttons" span={24}>
                    <Button
                      loading={loading}
                      icon="search"
                      type="primary"
                      htmlType="submit"
                    >
                      {i18n('common.search')}
                    </Button>
                    <Button
                      loading={loading}
                      onClick={() => this.handleReset(form)}
                      icon="undo"
                    >
                      {i18n('common.reset')}
                    </Button>
                  </Col>
                </Row>
              </Form>
            );
          }}
        />
      </FilterWrapper>
    );
  }
}

function select(state) {
  return {
    filter: selectors.selectFilter(state),
  };
}

export default withRouter(connect(select)(ZwierzakListFilter));
