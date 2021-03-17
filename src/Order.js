import React from 'react'
import './order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

function Order({order}) {
    return (
        <div className="order">
            <h2>Order</h2>
          <p>{moment.unix(order.data.created).format("MMMM Do YY, h:mma")}</p>
          <p className="order__id">
    <small>{order.id}</small>
          </p>
          {order.data.basket?.map(item=>(
               <CheckoutProduct
               id={item.id}
               name={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
               hideButton
             />
              ))}
              <CurrencyFormat renderText={
                    (value) => (
                       <h3 className='order__total'>
                           Order Total: {value}
                       </h3>
                    )
                }
                decimalScale={2}
                value={
                    order.data.amount
                }
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}/>

        </div>
    )
}

export default Order
