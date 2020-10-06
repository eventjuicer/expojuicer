//import 'babel-polyfill';
import React from 'react';
import { Admin, Resource, Delete, fetchUtils } from 'react-admin';
import TreeMenu from '@bb-tech/ra-treemenu';


import polyglotI18nProvider from 'ra-i18n-polyglot';
import AppBarTitle from './components/AppBarTitle';
import Logins from './components/Logins';
import Logout from './components/Logout';
import NotFound from './components/NotFound';
 
import customRoutes from './components/routes';

import {
  authClient, 
  eventjuicerApiClient,
  addUploadFeature,
  httpClient
} from './api';


import sagas from './redux/sagas';
import reducers from './redux/reducers';

import backupTranslations from './localise';
import Dashboard from './views/dashboard';

import {getLocale, hasAccessTo} from './helpers'
import {getTheme} from './styles/muiTheme'

import defaultEnglishTranslations from 'ra-language-english'
import defaultGermanTranslations from 'ra-language-german'
import defaultPolishTranslations from 'ra-language-polish'

import {
  ViewList as MeetupList,
  ViewEdit as MeetupEdit,
  ViewCreate as MeetupCreate
} from './views/meetups';

import {
  ViewList as CompanyDataList,
  ViewEdit as CompanyDataEdit
} from './views/companydata';

import { UpgradeList, UpgradeShow } from './views/upgrades';

import {
  ViewList as RepresentativeList,
  ViewEdit as RepresentativeEdit,
  ViewCreate as RepresentativeCreate
} from './views/representatives';

import {
  ViewList as PartyList,
  ViewEdit as PartyEdit,
  ViewCreate as PartyCreate
} from './views/party';

import {
  ViewList as PurchaseList
  // ViewEdit as VisitorEdit,
  // ViewEdit as VisitorShow,
} from './views/purchases';

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
  ViewList as BannerList
} from './views/banners';

import {
  ViewList as NewsletterList
} from './views/newsletters';


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
  ViewEdit as ContactEdit
} from './views/contacts';

import {
  ViewList as ContactlistList,
  ViewCreate as ContactlistCreate,
  ViewEdit as ContactlistEdit
} from './views/contactlists';

import { ViewList as ScanList, ViewEdit as ScanEdit } from './views/scans';

import { ViewList as RankingList } from './views/ranking';


const defaulTranslations = {
  en: defaultEnglishTranslations,
  de: defaultGermanTranslations,
  pl: defaultPolishTranslations
}

const uploadCapableDataProvider = addUploadFeature(
  eventjuicerApiClient( `${process.env.REACT_APP_API_ENDPOINT}`, httpClient)
);
const i18nProvider = polyglotI18nProvider((locale) => {

    return {...defaulTranslations[locale], ...backupTranslations[locale]}


    // const localiseUrl = encodeURIComponent(`https://localise.biz/api/export/all.json?format=multi&pretty&key=${process.env.REACT_APP_LOCALISE}`)

    // return fetchUtils.fetchJson(`https://api.eventjuicer.com/v1/services/no-cors?url=${localiseUrl}`)
    // .then(response => response.json)
    // .then(translations => translations[locale] )
    // .catch(error => backupTranslations)

},  getLocale() );


       // catchAll={NotFound}
        // title={<AppBarTitle />}     
      
  
        // logoutButton={Logout}


const knownResources = [

  <Resource name="companydata" list={CompanyDataList} edit={CompanyDataEdit} />,
  <Resource name="purchases" list={PurchaseList} />,
  <Resource name="upgrades" list={UpgradeList} show={UpgradeShow} />
];

const fetchResources = (permissions) => new Promise((resolve, reject) => {

  const filtered = knownResources.filter(component => hasAccessTo(permissions, component.props.name))

  resolve(filtered)

})

const App = (props) =>  <Admin
    dataProvider={ uploadCapableDataProvider }
    authProvider={ authClient }
    i18nProvider={ i18nProvider }
    //dashboard={ Dashboard }
    //yet to be checked
    loginPage={ Logins }
    customReducers={ reducers }
    customSagas={ sagas }
    customRoutes={ customRoutes }
    theme={ getTheme() }>{fetchResources}</Admin>

      


//


// <Resource
//   name="imports"
//   list={hasAccessTo(permissions, "imports", "list") ?  ImportList : null}
//   edit={hasAccessTo(permissions, "imports", "edit") ? ImportEdit : null}
//   create={hasAccessTo(permissions, "imports", "create") ? ImportCreate : null}
// />,

// <Resource
//   name="meetups"
//   list={hasAccessTo(permissions, "meetups", "list") ? MeetupList : null}
//   edit={hasAccessTo(permissions, "meetups", "edit") ? MeetupEdit  : null}
//   create={hasAccessTo(permissions, "meetups", "create") ? MeetupCreate  : null}
//   remove={hasAccessTo(permissions, "meetups", "remove") ? Delete  : null}
// />,

// <Resource
//   name="representatives"
//   list={hasAccessTo(permissions, "representatives", "list") ? RepresentativeList : null}
//   edit={hasAccessTo(permissions, "representatives", "edit") ? RepresentativeEdit : null}
//   create={hasAccessTo(permissions, "representatives", "create") ? RepresentativeCreate : null}
//   remove={hasAccessTo(permissions, "representatives", "delete") ? Delete : null}
// />,

// <Resource
//   name="party"
//   list={hasAccessTo(permissions, "party", "list") ? PartyList : null}
//   edit={hasAccessTo(permissions, "party", "edit") ? PartyEdit : null}
//   create={hasAccessTo(permissions, "party", "create") ? PartyCreate : null}
//   remove={hasAccessTo(permissions, "party", "delete") ? Delete : null}
// />,




// <Resource
//   name="contactlists"
//   list={hasAccessTo(permissions, "contactlists", "list") ? ContactlistList : null}
//   edit={hasAccessTo(permissions, "contactlists", "edit") ? ContactlistEdit : null}
//   create={hasAccessTo(permissions, "contactlists", "create") ? ContactlistCreate : null}
// />,

// <Resource 
//   name="visitors" 
//   list={hasAccessTo(permissions, "visitors", "list") ? VisitorList : null} 
// />,


// <Resource
//   name="campaigns"
//   list={hasAccessTo(permissions, "campaigns", "list") ? CampaignList : null}
//   edit={hasAccessTo(permissions, "campaigns", "edit") ? CampaignEdit : null}
//   create={hasAccessTo(permissions, "campaigns", "create") ? CampaignCreate : null}
// />,

// <Resource 
//   name="ranking" 
//   list={hasAccessTo(permissions, "ranking", "list") ? RankingList : null} 
// />,

// <Resource 
//   name="contacts" 
//   list={hasAccessTo(permissions, "contacts", "list") ? ContactList : null} 
//   edit={hasAccessTo(permissions, "contacts", "edit") ? ContactEdit : null} 
// />,

// <Resource 
//   name="creatives" 
//   list={hasAccessTo(permissions, "creatives", "list") ? CreativeList : null} 
//   edit={hasAccessTo(permissions, "creatives", "edit") ? CreativeEdit : null} 
// />,

// <Resource 
//   name="newsletters" 
//   list={hasAccessTo(permissions, "newsletters", "list") ? NewsletterList : null} 
// />,

// <Resource 
//   name="banners" 
//   list={hasAccessTo(permissions, "banners", "list") ? BannerList : null}  
// />,

// <Resource
//   name="scans"
//   options={{ label: 'Scans' }}
//   list={hasAccessTo(permissions, "scans", "list") ? ScanList : null}
//   edit={hasAccessTo(permissions, "scans", "edit") ? ScanEdit : null}
// />,

// <Resource name="tasks" />
// 





    
   








export default App;
