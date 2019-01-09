import React from 'react';
import { Card, CardText } from '@material-ui/coreCard';
import { ViewTitle } from 'react-admin';

export default () => (
  <Card>
    <ViewTitle title="Not Found" />
    <CardText>
      <h1>Checking permissions!</h1>
    </CardText>
  </Card>
);
