
import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
 


import {translate} from 'react-admin';
import get from 'lodash/get'
 
import Icon from '@material-ui/icons/Check'
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import compose from 'recompose/compose'

import {  
    ShowButton,
    linkToRecord
} from 'react-admin'

const cardStyle = {
    cursor: 'pointer',
    width: '30%',
    minHeight: 230,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};




const CustomIterator = ({ ids, data, basePath, locale, translate, push }) => (

    <div style={{ margin: '1em' }}>
    {ids.map(id => {

        return (
            <Card key={id} style={cardStyle} onClick={() => push(`${basePath}/${get(data[id], "id")}/show`)}>

            <CardHeader 
                title={
                   translate( `${get(data[id], `names.${locale}`)}.name` )
                } 
                // subheader={
                //    translate( `${data[id].names[locale]}.description` )
                // }
            />

            <div style={{position : 'relative'}}>
                {/* <CardMedia 
                // overlay
                <CardHeader 
                    title={
                        data[id].bookable > 0 || data[id].booked > 0 ? 
                        `${ get(data[id], `price.${locale}`) } ${locale==="pl" ? "PLN" : "EUR"} ${translate("common.sales.net")}` : 
                        `${translate("common.statuses.unavailable")}`
                    } 
                    subheader={
                        `
                        ${translate("common.sales.ends")}: ${data[id].end}
                        ${translate("common.sales.remaining")}: ${data[id].bookable} 
                        `
                    }
                />
                }
                style={{
                    backgroundImage : `url(${get(data[id], `thumbnail`, "")})`,
                    backgroundSize: 'cover',
                    backgroundPosition : 'center center',
                    backgroundRepeat : 'no-repeat',
                    height : 270,
                }}
            /> */}
            <div style={{
                position : 'absolute', 
                zIndex : 2,
                top: 0, 
                left : 0,
                display:'flex',
                width : '100%',
                height : '100%',
                alignItems : 'center',
                justifyContent : 'center'
                }}>
                
                {data[id].booked ? <Icon style={{
                    width: 200,
                    height : 200,
                    color : 'limegreen'
                    }}/> : null }
                
                </div>
            </div>
     
          
            <CardActions style={{ textAlign: 'right' }}>
                {/* <ItemStatusField record={data[id]} source="booked" /> */}
                <ShowButton resource="upgrades" basePath={basePath} record={data[id]} label="resources.upgrades.actions.details" />
            </CardActions>
        </Card>
        )
    }

       
    )}
    </div>
);

CustomIterator.defaultProps = {
    data: {},
    ids: [],
};


const enhance = compose(
    translate,
    connect(null, {push})
)

export default enhance(CustomIterator)