import React from 'react';
import {
  Edit,
  SimpleForm
} from 'react-admin';

import VarLabelTextField from '../../fields/VarLabelTextField'
import VarTextInput from '../../fields/VarTextInput'
import { Field } from 'react-final-form';
import { validate } from './validation';
import {translate} from 'react-admin';

const langs = `${process.env.REACT_APP_LOCALES}`.split(",");

const ViewEdit = props => (

  <Edit {...props}
    title={  <VarLabelTextField {...props} source="name" /> }
    >

    <SimpleForm  submitOnEnter={false} validate={validate}>

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
            'lang' :  langs || ["en"],
          }
        }

        uploads={
          ["opengraph_image"]
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
