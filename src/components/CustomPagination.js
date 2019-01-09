import React from 'react';

import FlatButton from '@material-ui/coreFlatButton';
import ChevronLeft from '@material-ui/coresvg-icons/navigation/chevron-left';
import ChevronRight from '@material-ui/coresvg-icons/navigation/chevron-right';
import { Toolbar, ToolbarGroup } from '@material-ui/coreToolbar';

const CustomPagination = ({ page, perPage, total, setPage }) => {
  const nbPages = Math.ceil(total / perPage) || 1;
  return (
    nbPages > 1 && (
      <Toolbar>
        <ToolbarGroup>
          {page > 1 && (
            <FlatButton
              primary
              key="prev"
              label="Prev"
              icon={<ChevronLeft />}
              onClick={() => setPage(page - 1)}
            />
          )}
          {page !== nbPages && (
            <FlatButton
              primary
              key="next"
              label="Next"
              icon={<ChevronRight />}
              onClick={() => setPage(page + 1)}
              labelPosition="before"
            />
          )}
        </ToolbarGroup>
      </Toolbar>
    )
  );
};

export default CustomPagination;
