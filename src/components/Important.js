
import React from 'react';
import {translate} from 'react-admin'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
 
import IconAlert from '@material-ui/icons/Warning';

import {
  yellow, red,
} from '@material-ui/core/colors';

const styles = {

  card : {
    boxShadow:'none',
    backgroundColor : yellow[50],
    marginTop : 20,
    marginBottom : 20
  },

  secondary : {
    paddingLeft : 60
  }

}

const Important = ({translate, label, children}) => (

  <Card style={styles.card}><CardHeader
    avatar={<IconAlert color={red[500]} />}
    title={translate(label)}
    subheader={ children ? children : null}
  /></Card>
)

Important.defaultProps = {
  label : "important"
}


export default translate(Important)
