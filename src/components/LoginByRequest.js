import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { propTypes, reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { CardActions } from '@material-ui/coreCard';
import RaisedButton from '@material-ui/coreRaisedButton';

import { translate, userLogin as userLoginAction } from 'react-admin';

import styles from '../styles/landing';
import renderInput from '../redux-form/TextInput';

class LoginByRequest extends Component {
  login = ({ email }) => {
    const { userLogin, location } = this.props;
    userLogin({ email }, location.state ? location.state.nextPathname : '/');
  };

  render() {
    const { handleSubmit, submitting, translate } = this.props;

    return (
      <form onSubmit={handleSubmit(this.login)}>
        <div style={styles.form}>
          <p style={styles.hint}>{translate('auth.loginByRequest.hint')}</p>

          <Field
            name="email"
            component={renderInput}
            floatingLabelText={translate('auth.fields.email')}
          />
        </div>

        <CardActions>
          <RaisedButton
            type="submit"
            primary
            disabled={submitting}
            label={translate('auth.actions.requestAccess')}
            fullWidth
          />
        </CardActions>
      </form>
    );
  }
}

LoginByRequest.propTypes = {
  ...propTypes,
  authClient: PropTypes.func,
  previousRoute: PropTypes.string,

  translate: PropTypes.func.isRequired
};

LoginByRequest.defaultProps = {};

const enhance = compose(
  translate,
  reduxForm({
    form: 'signInByRequest',
    validate: (values, props) => {
      const errors = {};
      const { translate } = props;
      if (!values.email) errors.email = translate('aor.validation.required');
      // if (!values.password) errors.password = translate('aor.validation.required');
      return errors;
    }
  }),
  connect(null, { userLogin: userLoginAction })
);

export default enhance(LoginByRequest);
