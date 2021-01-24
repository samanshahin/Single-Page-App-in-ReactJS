import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ordersData from '../data/SpaSlice'

export const BasketItems = () => {
    const dispatch = useDispatch()
    const orderDeleted = () => {
        dispatch(orderDeleted({prodId, prodTitle, prodDesc, q, fee, customerId, }))
    }
    const orderitems = useSelector(state => state.spaproj.ordersData)

    const content = orderitems.map(item => (
        <div key={item.prodId} className="container-xxl item-box">
            <div className="d-flex flex-column position-static">
                <h5 className="mb-0">{orderitems.prodTitle}</h5>
                <div className="mb-1 text-muted">{orderitems.prodDesc}</div>
                <p className="card-text mb-1">{orderitems.q} - {orderitems.fee}</p>
                <h6 className="total-price">$ {Math(orderitems.q * orderitems.fee)}</h6>
                <button type="button" className="btn btn-secondary btn-sm" onClick={orderDeleted}>Delete Item!</button>
            </div>
        </div>
    ))
  

    return (
        <div>
            {content}
        </div>
    )
}