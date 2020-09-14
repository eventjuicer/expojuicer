import React from 'react'
import {
    translate
} from 'react-admin';
import Button from '@material-ui/core/Button';
import Cart from '@material-ui/icons/AddShoppingCart'
import {connect} from 'react-redux'
import compose from 'recompose/compose'
import {showModal} from '../../redux/actions';
import QuantityBox from './QuantityBox'

class BuyAction extends React.Component {

    handleClick = () => {

        const {showModal, data, translate} = this.props;

        showModal({
            title: translate("resources.upgrades.dialog"),
            body: <QuantityBox data={data} />,
        })

    }

    render(){

        const {translate, data} = this.props    

        if("bookable" in data && data.bookable > 0){
                
            return  (<Button
                primary
                label={
                    ("booked" in data && data.booked > 0) ? 
                    translate(`common.actions.buy_more`) :
                    translate(`common.actions.buy`)
                }
                icon={<Cart />}
                onClick={this.handleClick}
                />
            )

        }
        else{
            
            return  (<Button
                disabled={true}
                primary
                label={translate(`common.statuses.unavailable`)}
                icon={<Cart />}
              />)
            
        }

    }

}

BuyAction.defaultProps = {
    data : {}
}

const enhance = compose(
    translate,
    connect(null, {showModal})
)

export default enhance(BuyAction)