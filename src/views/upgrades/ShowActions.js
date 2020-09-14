
import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Visibility from  '@material-ui/icons/Refresh'
import Refresh from '@material-ui/icons/Refresh'

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

    <Button
      primary
      label={translate('aor.action.refresh')}
      onClick={refresh}
      icon={<Refresh />}
    />
  
  </CardActions>
);

export default translate(Actions);
