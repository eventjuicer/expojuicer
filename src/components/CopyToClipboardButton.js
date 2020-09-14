import React from 'react';
import { connect } from 'react-redux';

import {
  showNotification as showNotificationAction
} from 'react-admin';

import { CopyToClipboard } from 'react-copy-to-clipboard';
 import Button from '@material-ui/core/Button';

import IconCopy from '@material-ui/icons/FileCopy';

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
      <Button disabled={disabled} label={label} icon={<IconCopy />} primary={true} />
    ) : (
      <Button disabled={disabled} label={label} icon={<IconCopy />} />
    )}
  </CopyToClipboard>
);


CopyToClipboardButton.defaultProps = {
  disabled : false
}

export default connect(null, {
  showNotification: showNotificationAction
})(CopyToClipboardButton);
