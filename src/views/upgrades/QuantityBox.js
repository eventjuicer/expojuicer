import React from 'react'
import Button from '@material-ui/core/Button';
import {
    translate,
    refreshView
} from 'react-admin';

 
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Check from '@material-ui/icons/Check'


import Select from '@material-ui/core/Select'; 
//https://v0.material-ui.com/#/components/select-field
import MenuItem from '@material-ui/core/MenuItem'; 

import {connect} from 'react-redux'
import compose from 'recompose/compose'
import {purchaseCreate} from '../../redux/actions';


class QuantityBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { itemsCount: 1};
    }

    renderItemsCountSelect(){

        const {data, translate} = this.props;

        const {itemsCount} = this.state;

        return (
            <Select
            floatingLabelText={translate('common.actions.quantity')}
            value={itemsCount}
            onChange={this.handleChange}
          >
            {[...Array(data.bookable+1).keys()].map( item => (
              <MenuItem
                key={item}
                value={item}
                primaryText={`${item} ${translate('common.sales.pcs')}`}
              />
            ))}
          </Select>
        )

    }

    handleChange = (event, index, value) => this.setState({itemsCount : value})

    handleBuy = () => {

        const {purchaseCreate, data, locale, refreshView} = this.props;
        const {itemsCount} = this.state;

        purchaseCreate({
            ticket_id: data.id,
            locale : locale,
            quantity : itemsCount,
            template : `${process.env.REACT_APP_UPGRADES_TEMPLATE}`,
            cc :  `${process.env.REACT_APP_UPGRADES_CC}`,
        });

        refreshView();

    }

    renderTotal(){

        const {data, locale} = this.props
        const {itemsCount} = this.state;


        if(!(locale in data.price)){
            return 'error';
        }

        const total = data.price[locale] * itemsCount;

        if(locale === "pl"){
            return `${total} PLN`;
        }
        else
        {
            return `${total} EUR`;
        }
    }

    render(){

        const {translate, resource, data} = this.props
        const {itemsCount} = this.state;

        return (
        
            <div>
            <div>
                { this.renderItemsCountSelect() }
            </div>
            <div style={{marginTop: 20}}>
                { this.renderTotal() } {` `} {translate('common.sales.net')}
            </div>
            <div style={{marginTop: 20}}>
                <Button
                primary
                disabled={itemsCount > 0 ? false : true}
                label={translate(`common.actions.buy`)}
                icon={<AddShoppingCartIcon />}
                onClick={this.handleBuy}
                />
            </div>
            </div>
        )
    }

}

QuantityBox.defaultProps = {
    data : {}
}

const enhance = compose(
    translate,
    connect(null, {purchaseCreate, refreshView})
)

export default enhance(QuantityBox)