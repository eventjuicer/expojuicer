import React from 'react';

import { translate } from 'react-admin';

import Tab  from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import {
  ExhibitionSpace,
  Shipment,
  Assembly,
  Upgrade
} from './components/';


import * as Typo from '../../components/Typography';
import Wrapper from '../../components/Wrapper';

const Informer = ({translate, Heading }) => (


<Typo.Page>

  <Typo.PageTitle label="informer.title"  />

  <div style={{marginTop: 50}}>

  <Tabs>
    <Tab label={translate('informer.tabs.basic')}>
      <Wrapper spacing="top">

        <Typo.Subheading label="informer.basic.exhibition_space" />

        <ExhibitionSpace />

        <Upgrade />

      </Wrapper>
    </Tab>

    <Tab label={translate('informer.tabs.shipment')} >
      <Wrapper spacing="top">
        <Shipment />
      </Wrapper>
    </Tab>

    <Tab label={translate('informer.tabs.assembly')} >
      <Wrapper spacing="top">
        <Assembly />
      </Wrapper>
    </Tab>

  </Tabs>

  </div>

</Typo.Page>


);

export default translate(Informer);
