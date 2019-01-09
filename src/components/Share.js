import React from 'react';
import Button from '@material-ui/coreFlatButton';
import { translate } from 'react-admin';

//escape() will not encode: @*/+
//encodeURI() will not encode: ~!@#$&*()=:/,;?+'
//encodeURIComponent() will not encode: ~!*()'
import {
    Linkedin,
    Facebook,
    Twitter
} from 'mdi-material-ui'


const Icons = {
  linkedin : Linkedin,
  facebook : Facebook,
  twitter : Twitter
}

const _escape = (str) => encodeURIComponent(str)

const Share = ({ translate, type, target, title, description, disabled }) => {

  const Icon = Icons[type]
  let link = '';

  const _title = title ? _escape( translate(title) ) : ''
  const _description = description ? _escape( translate(description) ) : ''
  const _target = _escape(target)

  switch (type) {
    case 'linkedin':
      link = `https://www.linkedin.com/shareArticle?mini=true&url=${ _target }&title=${ _title }&summary=${ _description }`;

      break;

    case 'facebook':
      link = `https://www.facebook.com/sharer/sharer.php?u=${ _target }`;
      break;

    case 'twitter':
      link = `https://twitter.com/home?status=${ _target }`;

      break;

    default:
  }

  return (
    <Button
      label={translate(`actions.share_${type}`)}
      icon={<Icon />}
      href={link}
      target="_blank"
      disabled={disabled}
    />
  );
};

Share.defaultProps = {
  title : "",
  description : "",
  disabled : false
}

export default translate(Share);
