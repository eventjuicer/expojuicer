
import React, { cloneElement, useMemo }  from 'react';
import {Visibility as Eye, Refresh} from '@material-ui/icons';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
    useListContext,
    TopToolbar,
    // CreateButton,
    // ExportButton,
    Button,
    sanitizeListRestProps,
    //useTranslate
} from 'react-admin';

import { getProfileUrl } from '../../helpers'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ListActions = (props) => {

    const {
        className,
        exporter,
        filters,
        maxResults,
        ...rest
    } = props;
    
    
    const {
        currentSort,
        resource,
        displayedFilters,
        filterValues,
        hasCreate,
        basePath,
        selectedIds,
        showFilter,
        total,
    } = useListContext();

    const classes = useStyles();


    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            {filters && cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: 'button',
            })}
          
        <Button
          variant="contained"
          color="secondary"
          href={getProfileUrl("", true)}
          target="_blank"
          label={`resources.${resource}.actions.preview`}
          className={classes.button}><Eye /></Button>


        </TopToolbar>
    );
};

export default ListActions

