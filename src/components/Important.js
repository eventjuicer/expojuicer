
import React from 'react';
import {translate} from 'react-admin'
import {Card, CardHeader, CardText} from '@material-ui/coreCard'
import {AlertCircle as IconAlert} from 'mdi-material-ui';
import {
  yellow50 as bgColor,
  red500 as iconColor,
} from '@material-ui/corestyles/colors';

const styles = {

  card : {
    boxShadow:'none',
    backgroundColor : bgColor,
    marginTop : 20,
    marginBottom : 20
  },

  secondary : {
    paddingLeft : 60
  }

}

const Important = ({translate, label, children}) => (

  <Card style={styles.card}><CardHeader
    avatar={<IconAlert color={iconColor} />}
    title={translate(label)}
  />{children ? <CardText style={styles.secondary}>{children}</CardText> : null}</Card>
)

Important.defaultProps = {
  label : "important"
}


export default translate(Important)
