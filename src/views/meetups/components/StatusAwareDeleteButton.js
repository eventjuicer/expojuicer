import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { DeleteButton, translate } from 'react-admin';

import IconButton from '@material-ui/core/IconButton';
import IconDelete from '@material-ui/icons/Delete';

import { showModal as showModalAction } from '../../../redux/actions';

import { status } from './status';

const StatusAwareDeleteButton = props => {
  const intStatus = status(props.record);

  return intStatus === -3 ? (
    <DeleteButton {...props} />
  ) : (
    <IconButton
      onClick={() =>
        props.showModal({
          title: 'Sorry!',
          body: 'You can only delete before sending....'
        })
      }
    >
      <IconDelete color="#cccccc" />
    </IconButton>
  );
};

const enhance = compose(
  translate,
  connect(null, {
    showModal: showModalAction
  })
);

export default enhance(StatusAwareDeleteButton);
