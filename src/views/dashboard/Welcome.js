import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

import { translate } from 'react-admin';

import Contact from '../../components/Contact';

import {SectionTitle} from '../../components/Typography'

export default translate(({ style, translate }) => (

  <Card style={style}>
    <CardHeader
      title={translate('dashboard.welcome.title')}
      subheader={translate('dashboard.welcome.subtitle')}
    />

    <Typography>{translate('dashboard.welcome.description')}</Typography>

    <div style={{margin: 10, paddingBottom: 50}}>

      <SectionTitle label="tutorials.competition.title" />

       <iframe 
        width="800" 
        height="452" 
        src="https://www.youtube.com/embed/_H4bpaB7hbg" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen />


      <iframe 
        width="800" 
        height="452" 
        src="https://www.youtube.com/embed/fXWGJRPCz9g" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen />


        

      {/* <Contact /> */}
    </div>

  </Card>

));
