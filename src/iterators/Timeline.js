import React from 'react';
import { useListContext, List, TextField, DateField, ReferenceField, EditButton } from 'react-admin';
import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import groupBy from 'lodash/groupBy'
import head from 'lodash/head'
import get from 'lodash/get'

import Typography from '@material-ui/core/Typography'

const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};

const Timeline = () => {

    const { ids, data, basePath } = useListContext();
    const groupedByEvent = groupBy(data, "event_id")
    const eventIdsSorted = Object.keys(groupedByEvent).sort((a, b) => b - a);

     return (
        <div style={{ margin: '1em' }}>
        {eventIdsSorted.map(id => {

            //sort by date?


            const first = head(groupedByEvent[id]);

     
            return (<div>

                <Typography variant="h5">{first.event_name}</Typography>

                {
                    groupedByEvent[id].map(purchase => <div>asdasD</div>)
                }
    
                </div>)

        }
        )}
        </div>
    );
};

export default Timeline;