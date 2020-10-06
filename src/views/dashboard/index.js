
import React from 'react';
import withWidth from '@material-ui/core/withWidth';
// import { AppBarMobile } from 'react-admin';
import Welcome from './Welcome';
import {List as TaskList} from '../tasks'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';


const styles = {
  welcome: { marginBottom: '5em' },
};

const Dashboard = ({ width, history }) => (

  <Card>
 
  <Title title="Hello!" />
  <CardContent>
    <Welcome />
  </CardContent>

</Card>

)


export default withWidth()(Dashboard);
 