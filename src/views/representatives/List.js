import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  TextField,
  DeleteButton
} from 'react-admin';




const ViewList = props => (

<List
    {...props}
    perPage={100}
  >
    <Datagrid>
      <TextField source="profile.fname"  sortable={false} />
      <TextField source="profile.lname"  sortable={false} />
      <TextField source="profile.position"  sortable={false} />
      <TextField source="profile.phone"  sortable={false} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
</List>
);

export default ViewList;
