import React from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import {
  translate,
  changeLocale as changeLocaleAction,
  Title,
  usePermissions
} from 'react-admin';

import { withRouter } from 'react-router-dom';
 
import compose from 'recompose/compose';

import { changeTheme as changeThemeAction } from '../../redux/actions';

import {getLocalesArray} from '../../helpers'


const styles = {
  label: { width: '10em', display: 'inline-block' },
  button: { margin: '1em' }
};

const Configuration = ({
  theme,
  locale,
  locales,
  changeTheme,
  changeLocale,
  translate,
  location
}) => {


  const { loaded, permissions } = usePermissions();


  return (
    <Card>
    <Title title={translate('pos.configuration')} />

    <Typography>
      <div style={styles.label}>{translate('pos.language')}</div>

      {
        locales.map(newLocale => <Button
          key={newLocale}
          style={styles.button}
          label={newLocale}
          primary={locale === newLocale}
          onClick={() => changeLocale(newLocale)}
        />)
      }

    
    </Typography>
  </Card>
  )

}


Configuration.defaultProps = {
  locales : getLocalesArray()
}

const mapStateToProps = state => ({
  theme: state.theme,
  locale: state.locale
});

const enhance = compose(
  translate,
  connect(mapStateToProps, {
    changeLocale: changeLocaleAction,
    changeTheme: changeThemeAction
  }),
  withRouter
);

export default enhance(Configuration);
