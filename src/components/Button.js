import React from 'react';

import {
  translate
} from 'react-admin';

import MuiButton from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility'

 
const Button = ({raised, label, icon, translate, locale, ...rest}) => (

  raised ?
    <MuiButton
      label={ translate(label) }
      icon={icon}
      primary={true}
      {...rest}
      />
   : <MuiButton
      label={ translate(label) }
      icon={icon}
      {...rest}
    />

)


Button.defaultProps = {
  raised : false,
  icon : <Visibility />
}

export default translate(Button)
