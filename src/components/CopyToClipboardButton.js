import React from 'react';
import { connect } from 'react-redux';

import {
  showNotification as showNotificationAction
} from 'react-admin';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import PrimaryButton from '@material-ui/coreRaisedButton';
import FlatButton from '@material-ui/coreFlatButton';

import IconCopy from '@material-ui/coresvg-icons/content/content-copy';

const CopyToClipboardButton = ({
  text,
  showNotification,
  label = 'Copy To Clipboard',
  raised = false,
  disabled
}) => (
  <CopyToClipboard
    text={text}
    onCopy={() => showNotification('actions.copied')}
  >
    {raised ? (
      <PrimaryButton disabled={disabled} label={label} icon={<IconCopy />} primary={true} />
    ) : (
      <FlatButton disabled={disabled} label={label} icon={<IconCopy />} />
    )}
  </CopyToClipboard>
);


CopyToClipboardButton.defaultProps = {
  disabled : false
}

export default connect(null, {
  showNotification: showNotificationAction
})(CopyToClipboardButton);
