import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  TopToolbar,
  ListButton,
  ShowButton
} from 'react-admin';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import VarLabelTextField from '../../fields/VarLabelTextField'
import VarTextInput from '../../fields/VarTextInput'
import { Field } from 'react-final-form';
import { validate } from './validation';
import {translate} from 'react-admin';
import {getLocalesArray} from '../../helpers'


const EditActions = ({ basePath, data }) => (
  <TopToolbar>
      <ListButton basePath={basePath} label="Back" icon={<ChevronLeft />} />
      {/* <ShowButton basePath={basePath} record={data} /> */}
  </TopToolbar>
);

const ViewEdit = props => (

  <Edit actions={<EditActions />} {...props}
    title={  <VarLabelTextField {...props} source="name" /> }
    >

    <SimpleForm  submitOnEnter={false} validate={validate}>


      {/* <TextInput disabled label="Id" source="id" /> */}

      <VarLabelTextField source="name" translateKey="description" style={{marginTop: 10, marginBottom: 30}}/>

      <Field
        style={{marginTop: 40}}
        name="value"
        // parse={v => v.split('\n').filter(v => v)}
        component={VarTextInput}

        html={[
          "about",
          "products",
          "expo"]}

        source="value"

        radios={
          {
            'countries' :  [
              'national', 'europe', 'global', 'other'
            ],
            'lang' :  getLocalesArray() || ["en"],
          }
        }

        uploads={
          ["opengraph_image", "logotype"]
        }

        checkboxes={{
          'countries' :  [
            'national', 'europe', 'global', 'other'
          ],
          'keywords' : [
            'logistics',
            'payment',
            'platform',
            'sales_generation',
            'software',
            'communication',
            'customer_support',
            'analytics',
            'international_sales',
            'omnichannel',
            'infrastructure'
          ]}}
      />

    </SimpleForm>
  </Edit>

)

export default translate(ViewEdit);
