import React from 'react';
import {translate} from 'react-admin';

const ShowTitle =  ({translate, locale, record}) => {
    
    if(! "names" in record || ! record.names){
        return null
    }

    return <span>{translate( `${record.names[locale]}.name`)}</span>

}

ShowTitle.defaultProps = {
    record : {}
}

export default translate(ShowTitle)