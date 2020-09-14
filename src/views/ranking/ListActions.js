import React from 'react';
import CardActions from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import NavigationRefresh from '@material-ui/icons/navigation/refresh';
import { ListButton, EditButton, DeleteButton } from 'react-admin';
import {translate} from 'react-admin';

const inviteListActionsStyle = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};

const Actions = ({ basePath, data, refresh, translate }) => (
  <CardActions style={inviteListActionsStyle}>
    <EditButton basePath={basePath} record={data} />
    <ListButton basePath={basePath} />
    <DeleteButton basePath={basePath} record={data} />
    <Button
      primary
      label={translate("aor.action.refresh")}
      onClick={refresh}
      icon={<NavigationRefresh />}
    />
    {/* Add your custom actions */}
    <Button
      primary
      label="Custom Action"
      onClick={test => console.log(test)}
    />
  </CardActions>
);

export default translate(Actions);
