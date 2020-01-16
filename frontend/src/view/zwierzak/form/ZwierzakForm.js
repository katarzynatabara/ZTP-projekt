import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/zwierzak/zwierzakModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'view/iam/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import RezerwacjaAutocompleteFormItem from 'view/rezerwacja/autocomplete/RezerwacjaAutocompleteFormItem';

const { fields } = model;

class ZwierzakForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.wlasciciel,
    fields.imie,
    fields.typ,
    fields.rasa,
    fields.rozmiar,
    fields.rezerwacja,
  ]);

  handleSubmit = (values) => {
    const { id, ...data } = this.schema.cast(values);
    this.props.onSubmit(id, data);
  };

  initialValues = () => {
    const record = this.props.record;
    return this.schema.initialValues(record || {});
  };

  renderForm() {
    const { saveLoading, isEditing } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                {isEditing && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}

                <UserAutocompleteFormItem
                  name={fields.wlasciciel.name}
                  label={fields.wlasciciel.label}
                  required={fields.wlasciciel.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <InputFormItem
                  name={fields.imie.name}
                  label={fields.imie.label}
                  required={fields.imie.required}
                />
                <SelectFormItem
                  name={fields.typ.name}
                  label={fields.typ.label}
                  options={fields.typ.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  required={fields.typ.required}
                />
                <InputFormItem
                  name={fields.rasa.name}
                  label={fields.rasa.label}
                  required={fields.rasa.required}
                />
                <SelectFormItem
                  name={fields.rozmiar.name}
                  label={fields.rozmiar.label}
                  options={fields.rozmiar.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  required={fields.rozmiar.required}
                />
                <RezerwacjaAutocompleteFormItem
                  name={fields.rezerwacja.name}
                  label={fields.rezerwacja.label}
                  required={fields.rezerwacja.required}
                  showCreate={!this.props.modal}
                  form={form}
                  mode="multiple"
                />

                <Form.Item
                  className="form-buttons"
                  {...tailFormItemLayout}
                >
                  <Button
                    loading={saveLoading}
                    type="primary"
                    onClick={form.handleSubmit}
                    icon="save"
                  >
                    {i18n('common.save')}
                  </Button>

                  <Button
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    icon="undo"
                  >
                    {i18n('common.reset')}
                  </Button>

                  {this.props.onCancel ? (
                    <Button
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                      icon="close"
                    >
                      {i18n('common.cancel')}
                    </Button>
                  ) : null}
                </Form.Item>
              </Form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (isEditing && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

export default ZwierzakForm;
