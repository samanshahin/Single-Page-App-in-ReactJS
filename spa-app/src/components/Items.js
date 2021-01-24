import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { orderAdded, orderDeleted } from '../data/SpaSlice'
// import elems from '../data/SpaSlice'

export const Items = () => {

    const dispatch = useDispatch()

    const items = useSelector(state => state.spaproj.prodData)

    const prodList = items.map(item => (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="mb-0">{item.prodTitle}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-sm btn-primary" onClick={() => { dispatch(orderAdded({ prodTitle: item.prodTitle })) }}>Add to Basket</button>
                    </div>
                </div>
            </div>
        </div>
    ))

    const deleteItem = () => {
        // find the parent of parent, then pass it to orderDeleted
        // orderDeleted(item)
        // dispatch(orderDeleted({ teprodTitle }))
    }
    const orderitems = useSelector(state => state.spaproj.orderData)

    const orderList = orderitems.map(item => (
        <div key={item.prodTitle} id={item.prodTitle} className="container-xxl item-box">
            <div className="d-flex flex-column position-static">
                <h5 className="mb-0">{item.prodTitle}</h5>
            </div>
        </div>
    ))

    const orderProcessed = () => {
        /* 
        You can extend the app with react-router, 
        one router for your shopping page and another is for admin
        make your store's data structure like this:
        const orders = [
           { order:
                { 
                    customerId: '',
                    prodTitles: {
                        'prod1',
                        'prod2',
                        ...
                    },
                    userconfirmed: false,
                    adminconfirmed: false,
                },
           ...
        ]
        as user pressed Proceed the Order button, userconfirmed field is set to true
        and at other router page, admin can see the user-confirmed orders and confirm them 
        */
    }
    return (
        <div className="row mb-3">
            <div className="col-md-3">
                <div className="container-xxl items-title-bar">BASKET</div>
                {orderList}
                <div className="btn btn-primary btn-success container-xxl" onClick={orderProcessed}>Proceed the Order</div>
            </div>
            <div className="col-md-9">
                <div className="container-xxl prods-title-bar">PRODUCTS LIST</div>
                <div id="prods-items-main">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {prodList}
                    </div>
                </div>
            </div>
        </div>
    )
}