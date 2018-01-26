//import 'babel-polyfill';
import React from 'react';
import { Admin, Resource } from 'admin-on-rest';

import AppBarTitle from './components/AppBarTitle';
import Logins from './components/Logins';
import Logout from './components/Logout';
import NotFound from './components/NotFound';
import Menu from './components/Menu';
import customRoutes from './components/routes';

import authClient from './api/authClient';
import restClient from './api/restClient';

import sagas from './redux/sagas';
import reducers from './redux/reducers';

import translations from './i18n';

import Dashboard from './views/dashboard';

import {
  ViewList as MeetupList,
  ViewEdit as MeetupEdit,
  ViewCreate as MeetupCreate
} from './views/meetups';

import {
  ViewList as VisitorList
  // ViewEdit as VisitorEdit,
  // ViewEdit as VisitorShow,
} from './views/visitors';

import {
  ViewList as CreativeList,
  ViewEdit as CreativeEdit,
  ViewCreate as CreativeCreate
} from './views/creatives';

import {
  ViewList as CampaignList,
  ViewCreate as CampaignCreate,
  ViewEdit as CampaignEdit
} from './views/campaigns';

import {
  ViewList as ImportList,
  ViewCreate as ImportCreate,
  ViewEdit as ImportEdit
} from './views/imports';

import {
  ViewList as ContactList,
  ViewCreate as ContactCreate,
  ViewEdit as ContactEdit
} from './views/contacts';

import { ViewList as ScanList, ViewEdit as ScanEdit } from './views/scans';

import { ViewList as RankingList } from './views/ranking';

class App extends React.Component {
  render() {
    return (
      <Admin
        catchAll={NotFound}
        title={<AppBarTitle />}
        restClient={restClient}
        customReducers={reducers}
        customSagas={sagas}
        customRoutes={customRoutes}
        authClient={authClient}
        dashboard={Dashboard}
        loginPage={Logins}
        logoutButton={Logout}
        menu={Menu}
        messages={translations}
      >
        <Resource
          name="imports"
          list={ImportList}
          edit={ImportEdit}
          create={ImportCreate}
        />

        <Resource
          name="meetups"
          list={MeetupList}
          edit={MeetupEdit}
          create={MeetupCreate}
        />

        <Resource name="visitors" list={VisitorList} />

        <Resource
          name="campaigns"
          list={CampaignList}
          edit={CampaignEdit}
          create={CampaignCreate}
        />

        <Resource name="ranking" list={RankingList} />

        <Resource
          name="contacts"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
        />

        <Resource name="creatives" list={CreativeList} edit={CreativeEdit} />

        <Resource
          name="newsletters"
          list={CreativeList}
          edit={CreativeEdit}
          create={CreativeCreate}
        />
        <Resource
          name="scans"
          options={{ label: 'Scans' }}
          list={ScanList}
          edit={ScanEdit}
        />
      </Admin>
    );
  }
}

export default App;
