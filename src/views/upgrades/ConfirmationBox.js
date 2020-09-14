import React from 'react'
import {
    translate
} from 'react-admin';

const ConfirmationBox = ({translate, data}) => ( <div>{translate("common.thankyou")}</div>)

ConfirmationBox.defaultProps = {
    data : {}
}


export default translate(ConfirmationBox);