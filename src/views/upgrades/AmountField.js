import React from 'react'
import {translate} from 'react-admin'

const AmountField = ({basePath, record, resource, translate, locale}) => {

    const currency = "locale" in record && record.locale === "en" ? "EUR" : "PLN"; 

    return `${record.amount} ${currency} ${translate("common.sales.net")}` 
}

AmountField.defaultProps = {
    record : {},
    addLabel : true
}  

export default translate(AmountField)
  