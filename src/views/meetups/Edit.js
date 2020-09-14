import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  TextField,
  minLength
} from 'react-admin';

import FullNameField from '../../fields/FullNameField';
import { validate, basicValidation } from './validation';
//import { getUserFullName, getUserData } from '../../helpers';

const ViewEdit = props => (
  <Edit title="resources.meetups.fields.participant.profile.title" {...props}>
    <SimpleForm submitOnEnter={false} validate={validate}>
      <FullNameField source="admin.profile" label="Creator" />

      <TextField
        source="message"
        validate={[basicValidation]}
        style={{ maxWidth: 544 }}
      />

      <TextInput multiline source="comment" style={{ maxWidth: 544 }} />

      <TextField source="participant.profile.fname" />
      <TextField source="participant.profile.lname" />
      <TextField source="participant.profile.cname2" />
      <TextField source="participant.profile.position" />
    </SimpleForm>
  </Edit>
);

export default ViewEdit;
