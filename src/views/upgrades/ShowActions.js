
import React from 'react';
import { CardActions } from '@material-ui/coreCard';
import FlatButton from '@material-ui/coreFlatButton';

import {Eye, Refresh} from 'mdi-material-ui';

import {
  ListButton,
  translate
} from 'react-admin';

import BuyAction from './BuyAction'

const style = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};

const Actions = ({ basePath, data, refresh, resource, translate, ...rest }) => (

  <CardActions style={style}>

    <BuyAction data={data} resource={resource} basePath={basePath} />
    
    <ListButton basePath={basePath} />

    <FlatButton
      primary
      label={translate('aor.action.refresh')}
      onClick={refresh}
      icon={<Refresh />}
    />
  
  </CardActions>
);

export default translate(Actions);
