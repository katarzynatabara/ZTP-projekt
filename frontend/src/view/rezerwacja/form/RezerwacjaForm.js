import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/rezerwacja/rezerwacjaModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import TextAreaFormItem from 'view/shared/form/items/TextAreaFormItem';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'view/iam/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import DatePickerFormItem from 'view/shared/form/items/DatePickerFormItem';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import FilesFormItem from 'view/shared/form/items/FilesFormItem';
import ZwierzakAutocompleteFormItem from 'view/zwierzak/autocomplete/ZwierzakAutocompleteFormItem';

const { fields } = model;

class RezerwacjaForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.wlasciciel,
    fields.zwierzak,
    fields.przyjazd,
    fields.wyjazd,
    fields.uwagiKlienta,
    fields.uwagiPracownika,
    fields.zdjecia,
    fields.status,
    fields.anulowanieUwagi,
    fields.oplata,
    fields.rachunek,
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
                <ZwierzakAutocompleteFormItem
                  name={fields.zwierzak.name}
                  label={fields.zwierzak.label}
                  required={fields.zwierzak.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <DatePickerFormItem
                  name={fields.przyjazd.name}
                  label={fields.przyjazd.label}
                  required={fields.przyjazd.required}
                  showTime
                />
                <DatePickerFormItem
                  name={fields.wyjazd.name}
                  label={fields.wyjazd.label}
                  required={fields.wyjazd.required}
                  showTime
                />
                <TextAreaFormItem
                  name={fields.uwagiKlienta.name}
                  label={fields.uwagiKlienta.label}
                  required={fields.uwagiKlienta.required}
                />
                <TextAreaFormItem
                  name={fields.uwagiPracownika.name}
                  label={fields.uwagiPracownika.label}
                  required={fields.uwagiPracownika.required}
                />
                <ImagesFormItem
                  name={fields.zdjecia.name}
                  label={fields.zdjecia.label}
                  required={fields.zdjecia.required}
                  path={fields.zdjecia.path}
                  schema={{
                    size: fields.zdjecia.size,
                  }}
                  max={fields.zdjecia.max}
                />
                <SelectFormItem
                  name={fields.status.name}
                  label={fields.status.label}
                  options={fields.status.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  required={fields.status.required}
                />
                <TextAreaFormItem
                  name={fields.anulowanieUwagi.name}
                  label={fields.anulowanieUwagi.label}
                  required={fields.anulowanieUwagi.required}
                />
                <InputFormItem
                  name={fields.oplata.name}
                  label={fields.oplata.label}
                  required={fields.oplata.required}
                />
                <FilesFormItem
                  name={fields.rachunek.name}
                  label={fields.rachunek.label}
                  required={fields.rachunek.required}
                  path={fields.rachunek.path}
                  schema={{
                    size: fields.rachunek.size,
                    formats: fields.rachunek.formats,
                  }}
                  max={fields.rachunek.max}
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

export default RezerwacjaForm;
