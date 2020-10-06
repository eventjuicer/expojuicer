import React from 'react';
import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { MenuItemLink, getResources, usePermissions } from 'react-admin';
import { withRouter } from 'react-router-dom';
import LabelIcon from '@material-ui/icons/Label';
import menuItems from './menuItems'
import { hasAccessTo } from '../helpers';


const Menu = ({ onMenuClick, logout }) => {
    
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
  //  const resources = useSelector(getResources);
   const {loaded, permissions} = usePermissions();

    if(!loaded){
      return <div></div>
    }

    const showableMenuItems = menuItems.filter(section => section.items.some(item => hasAccessTo(permissions, item.name)))

    return (
        <div>
            {showableMenuItems.map(resource => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={resource.options && resource.options.label || resource.name}
                    leftIcon={createElement(resource.icon)}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                />
            ))}
            <MenuItemLink
                to="/custom-route"
                primaryText="Miscellaneous"
                leftIcon={<LabelIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            {isXSmall && logout}
        </div>
    );
}

export default Menu;