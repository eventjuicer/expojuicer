import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import CardHeader  from '@material-ui/core/CardHeader';
import { translate } from 'react-admin';
import get from 'lodash/get';

const Limit = props => {
  const resData = get(props.limits, props.resource, '...');

  const title = props.translate(`resources.${props.resource}.name`);

  const limit = props.limit
    ? props.translate(`resources.${props.resource}.limit`, { limit: resData })
    : '';

  return (
    <CardHeader
      style={{ padding: 0 }}
      title={title + limit}
      subheader={
        props.limit || props.subtitle
          ? props.translate(`resources.${props.resource}.subtitle`)
          : null
      }
    />
  );
};

Limit.defaultProps = {
  limit: false,
  subtitle: false
};

const mapStateToProps = state => ({
  limits: state.resourcelimit
});

const enhance = compose(translate, connect(mapStateToProps, null));

export default enhance(Limit);
