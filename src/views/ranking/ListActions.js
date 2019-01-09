import React from 'react';
import { CardActions } from '@material-ui/coreCard';
import FlatButton from '@material-ui/coreFlatButton';
import NavigationRefresh from '@material-ui/coresvg-icons/navigation/refresh';
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
    <FlatButton
      primary
      label={translate("aor.action.refresh")}
      onClick={refresh}
      icon={<NavigationRefresh />}
    />
    {/* Add your custom actions */}
    <FlatButton
      primary
      label="Custom Action"
      onClick={test => console.log(test)}
    />
  </CardActions>
);

export default translate(Actions);
