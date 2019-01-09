import React from 'react';
import { connect } from 'react-redux';
import {
  MenuItemLink,
  getResources,
  translate,
  DashboardMenuItem,
  WithPermissions
} from 'react-admin';
import compose from 'recompose/compose';

import Subheader from '@material-ui/coreSubheader';
//import Divider from '@material-ui/coreDivider';



import Modal from './Modal';
import Chatlio from '../services/Chatlio';
import menuItems, {getSectionItemNames} from './menuItems'
import {hasAccessTo} from '../helpers'


// const canBeShown = ( menuItemName ) => {
//   return true;
//   const showableMenuItems = `${process.env.REACT_APP_MENU_ITEMS}`.trim()
//   if(!showableMenuItems)
//   {
//     return true;
//   }
//   return showableMenuItems.split(",").indexOf(menuItemName) > -1
// }

/* 

we may filter resources for list attribute

*/

const resourcesWithListAccess = (resources) => resources.filter(res => res.list).map(res => res.name)
 
const Menu = ({ resources, onMenuTap, logout, translate }) => {

  return (

    <div style={{marginTop: 20}}>

      <DashboardMenuItem onTouchTap={onMenuTap} />
  

      <WithPermissions>
        {({permissions}) => {

          console.log(permissions)

          return menuItems.map((section) => <div key={section.name} value={getSectionItemNames(section)} resolve={({permissions, value}) => hasAccessTo(permissions, value)}>
          <Subheader>{translate(`menu.sections.${section.name}`)}</Subheader>{
            section.items.map((item) => <div key={`${section.name}_${item.name}`} value={item.name} resolve={({permissions, value}) => hasAccessTo(permissions, value)}>
            <MenuItemLink 
              to={`/${item.name}`}
              primaryText={ translate(item.label) }
              onClick={onMenuTap}
              leftIcon={item.icon}
            /></div>)}</div>)


        }}
      </WithPermissions>
  
      {logout}
  
      <Modal />
      <Chatlio />
  
    </div>
  );
}

const mapStateToProps = state => ({
  resources: getResources(state),
  locale: state.locale
});

const enhance = compose(
  connect(mapStateToProps),
  translate
);

export default enhance(Menu)
