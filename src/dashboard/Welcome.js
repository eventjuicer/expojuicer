import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import HomeIcon from 'material-ui/svg-icons/action/home';
import CodeIcon from 'material-ui/svg-icons/action/code';
import FlatButton from 'material-ui/FlatButton';
import { translate } from 'admin-on-rest';

export default translate(({ style, translate }) => (
  <Card style={style}>
    <CardHeader
      title={translate('dashboard.welcome.title')}
      subtitle={translate('dashboard.welcome.subtitle')}
      avatar={<Avatar backgroundColor="#FFEB3B" icon={<LightBulbIcon />} />}
    />

    <CardText>
  {translate('dashboard.welcome.description')}
    </CardText>
  {/*  <CardActions style={{ textAlign: 'right' }}>
      <FlatButton
        label={translate('pos.dashboard.welcome.aor_button')}
        icon={<HomeIcon />}
        href=""
      />
      <FlatButton
        label={translate('pos.dashboard.welcome.demo_button')}
        icon={<CodeIcon />}
        href=""
      />
    </CardActions>

    */ }


  </Card>
));