import React from 'react';
import {
  Show,
  SimpleShowLayout,
  Datagrid,
  DateField,
  ReferenceManyField
} from 'react-admin';

import ShowTitle from './ShowTitle'
import ShowActions from './ShowActions';



import ModifyPurchaseField from './ModifyPurchaseField'
import AmountField from './AmountField'
import PurchaseStatusField from './PurchaseStatusField'
import PurchaseTicketsField from './PurchaseTicketsField'

import CustomField from './CustomField' 

const MyImageField = ({record}) => (
  <div><img src={record.image} style={{width : '100%'}} /></div>
)

MyImageField.defaultProps = {
  record : {}
}

const Purchases = (props) => {

  const {record} = props;
    
  if("purchase_ids" in record && Array.isArray(record.purchase_ids) && !record.purchase_ids.length){
    return null;
  }

  return (
  <ReferenceManyField {...props} label="Purchases" reference="purchases" target="ticket_id">

  <Datagrid>

    <DateField source="ts" label="Date" sortable={false} />
    <PurchaseTicketsField showItems={false} source="items" sortable={false} />
    <AmountField source="amount" sortable={false} />
    <PurchaseStatusField source="status" sortable={false} />
    <ModifyPurchaseField sortable={false} />

  </Datagrid>
</ReferenceManyField>
)}

const ViewEdit = (props) => (

  <Show {...props}
    title={ <ShowTitle /> }
    actions={<ShowActions />}
    >


    <SimpleShowLayout>
      
      <Purchases />
    
      <CustomField />
      <MyImageField  />


    </SimpleShowLayout>

  </Show>

)

export default ViewEdit;
