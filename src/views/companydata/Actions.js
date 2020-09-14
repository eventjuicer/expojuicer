
import React from 'react';
import CardActions  from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
 
import {Visibility as Eye, Refresh} from '@material-ui/icons';

import {
  translate,
  // ListButton,
  // EditButton,
  // DeleteButton
} from 'react-admin';

import { getProfileUrl } from '../../helpers'

const style = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};



const Actions = ({ basePath, data, refresh, resource, translate, ...rest }) => (

  <CardActions style={style}>

    <Button
      primary
      label={translate(`resources.${resource}.actions.preview`)}
      href={getProfileUrl("", true)}
      target="_blank"
      icon={<Eye />}
    />

    {/* <EditButton basePath={basePath} record={data} />
    <ListButton basePath={basePath} />
    <DeleteButton basePath={basePath} record={data} /> */}

    <Button
      primary
      label={translate('aor.action.refresh')}
      onClick={refresh}
      icon={<Refresh />}
    />
    {/* Add your custom actions */}
    {/* <Button primary label="Custom Action" onClick={customAction} /> */}
  </CardActions>
);

export default translate(Actions);
