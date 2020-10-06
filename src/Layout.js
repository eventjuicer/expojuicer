import React from 'react';
import { Layout } from 'react-admin';
// import MyAppBar from './MyAppBar';
import Menu from './components/Menu';
// import MyNotification from './MyNotification';

const MyLayout = (props) => <Layout
    {...props}
    // appBar={MyAppBar}
    menu={ Menu }
    // notification={MyNotification}
/>;

export default MyLayout;