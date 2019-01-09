import React from 'react';
import { CardActions } from '@material-ui/coreCard';
import FlatButton from '@material-ui/coreFlatButton';
import NavigationRefresh from '@material-ui/coresvg-icons/navigation/refresh';
import { ListButton, EditButton, DeleteButton } from 'react-admin';

const styles = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};

const InviteListActions = ({ basePath, data, refresh }) => (
  <CardActions style={styles}>
    <FlatButton basePath="/contacts" primary label="Contacts" />

    <FlatButton
      primary
      label="Refresh"
      onClick={refresh}
      icon={<NavigationRefresh />}
    />
    {/*

        <EditButton basePath={basePath} record={data} />
  <DeleteButton basePath={basePath} record={data} />
      <EditButton basePath={basePath} record={data} />
  <FlatButton primary label="Custom Action" onClick={customAction} />
      */}
  </CardActions>
);

export default InviteListActions;
