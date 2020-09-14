import React from 'react';

import {
  TextInput,
  CheckboxGroupInput,
  RadioButtonGroupInput
} from 'react-admin'

import pure from 'recompose/pure'

import RichTextInput from 'ra-input-rich-text';

//https://quilljs.com/docs/modules/toolbar/

import Dropzone from 'react-dropzone'

const styles = {
  error : {
    color: 'rgb(244, 67, 54)',
    fontSize : 12,
    lineHeight : '12px'
  },

}

const buildChoices = (choices, resource, prefix) => {

  return choices.map(choice => ({
    "id" : choice,
    "name" : `resources.${resource}.fields.${prefix}_choices.${choice}`
  }))

}

const FieldError = ({valid, invalid, error}) => {
  return !valid ? <p style={styles.error}>{error}</p> : null;
}

const VarTextInput = props => {

  const { record, resource, html, uploads, checkboxes, radios, source} = props;

  const name = record.name;

  // if(name in uploads){
  //
  //     <Dropzone onDrop={() => alert("asd")}>
  //       <p>upload</p>
  //     </Dropzone>
  //
  // }

  if(name in radios)
  {
      return <RadioButtonGroupInput source={source} {...props} choices={ buildChoices(radios[name], resource, name) } />

  }

  if(name in checkboxes)
  {
    return <div>
      <CheckboxGroupInput
      {...props}
      choices={ buildChoices(checkboxes[name], resource, name) }
    />

      <FieldError { ...props.meta } />

    </div>
  }

  if(html.indexOf(name) > -1)
  {
    return <RichTextInput {...props} toolbar={[
    //  [{ 'header': 3 }],
      ['bold', 'italic', 'link'],
      ['blockquote', { 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean']
    ]} />
  }

  return (
    <TextInput multiline {...props}  />
  )
}

VarTextInput.defaultProps = {
  html : [],
  uploads : [],
  checkboxes : {},
  radios : {}
}

export default pure(VarTextInput);

// {source: "name", sortable: false, record: {…}, basePath: "/companydata", resource: "companydata"}
