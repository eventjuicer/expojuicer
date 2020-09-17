import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  TextField,
  Filter,
  TextInput
} from 'react-admin';

import { useWidth } from '../../helpers';

import ListActions from './Actions';

import VarLabelTextField from '../../fields/VarLabelTextField';
import MultiContentField from '../../fields/MultiContentField';

const CompanyDataFilter = (props) => (
  <Filter {...props}>
      {/* <TextInput label="Search" source="q" alwaysOn /> */}
      {/* <TextInput label="Title" source="title" defaultValue="Hello, World!" /> */}
  </Filter>
);

const ViewList = props => {

  const width = useWidth();

  return (

    <List
      {...props}
      // title={<ViewTitle
      // resource={props.resource}
      // limit={false}
      // />}
      exporter={false}
      actions={<ListActions/>}
      bulkActionButtons={false}
      filters={<CompanyDataFilter />}
      //sort={{ field: 'cname2', order: 'ASC' }}
      perPage={100}
      >
      <Datagrid>
  
        <VarLabelTextField
          source="name"
          sortable={false}
        />
  
        <MultiContentField source="value" sortable={false} baseLabel={ function(record){
  
          if(record.name === "countries" || record.name === "keywords")
          {
            return `resources.companydata.fields.${record.name}_choices.`;
          }
  
          return false;
  
        } } />
  
        
       { (width==="xl" || width==="lg") && <TextField source="updated_at" sortable={false} />}
    
  
        <EditButton />
  
      </Datagrid>
  </List>
  );
}

export default ViewList;
