import React from 'react';
import TextField from '@material-ui/coreTextField';

const styles = {
  input: {
    display: 'flex'
  }
};

const renderInput = ({
  meta: { touched, error } = {},
  input: { ...inputProps },
  ...props
}) => (
  <div style={styles.input}>
    <TextField
      errorText={touched && error}
      {...inputProps}
      {...props}
      fullWidth
    />
  </div>
);

export default renderInput;
