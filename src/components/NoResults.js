import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
 

import { translate } from 'react-admin';

const styles = {
  container: {
    //margin: 10,
    backgroundColor: 'yellow'
  }
};

const NoResults = props =>
  props.specialmessage ? (
    <Paper zDepth={2} style={styles.container}>
      <Card>
        <CardHeader
          title={props.translate(`${props.specialmessage}.noresults`)}
          subheader={props.translate(`${props.specialmessage}.noresultsmore`)}
        />
       
      </Card>
    </Paper>
  ) : null;

const mapStateToProps = state => ({
  specialmessage: state.specialmessage
});

const enhance = compose(translate, connect(mapStateToProps, null));

export default enhance(NoResults);
