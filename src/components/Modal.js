import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-admin';
import compose from 'recompose/compose';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import get from 'lodash/get';

import { closeModal as closeModalAction } from '../redux/actions';

const style = {
  modal: {
    width: '90%',
    maxWidth: 1000
  },
  imageContainer: {
    padding: '2em',
    margin: '2em'
  },
  image: {
    maxWidth: '100%'
  }
};

const Modal = ({ modal, closeModal, translate }) => {
  const buttons = get(modal, 'buttons', []);

  return (
    <Dialog
      title={get(modal, 'title', 'Info')}
      actions={[
        ...buttons,
        [<Button label={translate("aor.action.close")} onClick={closeModal} />]
      ]}
      modal={false}
      open={modal ? true : false}
      onRequestClose={closeModal}
      contentStyle={style.modal}
      autoScrollBodyContent={true}
    >
      {get(modal, 'body', '')}

      {get(modal, 'image') ? (
        <div style={style.imageContainer}>
          <img style={style.image} src={get(modal, 'image')} alt="" />
        </div>
      ) : null}
    </Dialog>
  );
};

const mapStateToProps = state => ({
  modal: state.modal
});

const enhance = compose(
  translate,
  connect(mapStateToProps, { closeModal: closeModalAction })
);

export default enhance(Modal);
