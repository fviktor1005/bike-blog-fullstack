import React from "react";
import { Field } from "react-final-form";
import { Input, FormGroup, Label, FormFeedback } from "reactstrap";

const InputField = ({ name, label, ...rest }) => (
  <Field name={name}>
    {({ input, meta }) => (
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Input {...input} {...rest} invalid={meta.invalid} />
        <FormFeedback>
          {(meta.error || meta.submitError) &&
            meta.touched &&
            (meta.error || meta.submitError)}
        </FormFeedback>
      </FormGroup>
    )}
  </Field>
);

export { InputField };
