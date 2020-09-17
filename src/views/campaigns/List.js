import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';
//
// const VisitorFilter = props => (
//   <Filter {...props}>
//     <TextInput label="pos.search" source="q" alwaysOn />
//   </Filter>
// );

const ViewList = props => (
  <List
    {...props}
    // filters={<VisitorFilter />}
    sort={{ field: 'cname2', order: 'ASC' }}
    perPage={100}
  >
    <Datagrid>
      <TextField source="fname" />
      <TextField source="lname" />
      <TextField source="cname2" />
      <TextField source="position" />
    </Datagrid>
  </List>
);

export default ViewList;
