import React from 'react';
import { CardActions } from '@material-ui/coreCard';
import FlatButton from '@material-ui/coreFlatButton';
import IconRefresh from '@material-ui/coresvg-icons/navigation/refresh';
import IconDownload from '@material-ui/coresvg-icons/file/file-download';
import {translate} from 'react-admin';

//import { ListButton } from 'react-admin';
import {getToken} from '../../helpers';

const style = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};

const Actions = ({
  resource,
  filters,
  displayedFilters,
  filterValues,
  basePath,
  showFilter,
  refresh,
  translate,
}) => (
  <CardActions style={style}>
    {filters &&
      React.cloneElement(filters, {
        resource,
        showFilter,
        displayedFilters,
        filterValues,
        context: 'button'
      })}

    <FlatButton primary href={`https://api.eventjuicer.com/v1/restricted/scans?download=1&x-token=${ getToken() }`} label = {translate("aor.action.export")} icon={<IconDownload />} />

    <FlatButton
      primary
      label={translate("aor.action.refresh")}
      onClick={refresh}
      icon={<IconRefresh />}
    />

  </CardActions>
);

export default translate(Actions);
