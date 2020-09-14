import React from 'react';


//import SettingsIcon from '@material-ui/icons/settings';
import ContentInbox from '@material-ui/icons/Inbox';
import IconStatus from '@material-ui/icons/Today';
import IconTrend from '@material-ui/icons/TrendingUp';
import IconShare from '@material-ui/icons/VolumeUp';
import IconRewards from '@material-ui/icons/Favorite';
import IconImports from '@material-ui/icons/ContactMail';
import IconLanguage from '@material-ui/icons/Language';
import IconSetting from '@material-ui/icons/Settings';
import IconBuild from '@material-ui/icons/Build';
import IconCart from '@material-ui/icons/ShoppingCart';
import IconParty from '@material-ui/icons/LocalBar';
import IconPeople from '@material-ui/icons/People';
import IconLogistics from '@material-ui/icons/Redeem';

 

export const getSectionItemNames = (section) => section.items.map(item => item.name)


const menuItems = [

  { name : "crucial",
    items : [{
      name : "companydata",
      label : "resources.companydata.menu",
      icon : <IconSetting />
    },
    {
      name : "purchases",
      label : "resources.purchases.menu",
      icon : <IconCart />
    },
    {
      name : "upgrades",
      label : "resources.upgrades.menu",
      icon : <IconBuild />
    },
    {
      name : "logistics",
      label : "resources.logistics.menu",
      icon : <IconLogistics />
    },{
      name : "representatives",
      label : "resources.representatives.menu",
      icon : <IconPeople />
    },{
      name : "party",
      label : "resources.party.menu",
      icon : <IconParty />
    }
  ]},
  {
    name : "promote",
    items : [
      
    // {
    //   name : "ranking",
    //   label : "resources.ranking.menu",
    //   icon : <IconTrend />
    // },
    {
      name : "campaigns",
      label : "resources.campaigns.menu",
      icon : <ContentInbox />
    },
    {
      name : "contacts",
      label : "resources.contacts.menu",
      icon : <IconImports />
    },
    {
      name : "rewards",
      label : "resources.rewards.menu",
      icon : <IconRewards />
    },
    {
      name : "newsletters",
      label : "resources.newsletters.menu",
      icon : <IconTrend />
    },
    {
      name : "creatives",
      label : "resources.creatives.menu",
      icon : <IconShare />
    },
  ]},{
    name : "suggest_a_meeting",
    items : [
      {
        name : "visitors",
        label : "resources.visitors.menu",
        icon : <IconPeople />
      },
      {
        name : "meetups",
        label : "resources.meetups.menu",
        icon : <IconStatus />
      },

  ]},{
    name : "leads",
    items : [
      {
        name : "badgescanner",
        label : "resources.scans.menu",
        icon : <IconTrend />
      },
      {
        name : "scans",
        label : "resources.scans.menu",
        icon : <IconTrend />
      }
    ]
  },
  {
    name : "settings",
    items : [
    {
        name : "configuration",
        label : "pos.configuration",
        icon : <IconLanguage />
      }
    ]
  }

];




export default menuItems;
