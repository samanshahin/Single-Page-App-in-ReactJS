import React from 'react'

export const prodList = () => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="..."
                    width="100%" height="100%" />
                <div className="card-body">
                    <h5 className="mb-0">Product title</h5>
                    <div className="mb-1 text-muted">description</div>
                    <p className="card-text mb-3">Price: $ ...</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <span className="btn btn-sm btn-outline-secondary" onclick="">+</span>
                            <span className="btn btn-sm btn-outline-secondary">0</span>
                            <span className="btn btn-sm btn-outline-secondary" onclick="">-</span>
                        </div>
                        <button className="btn btn-sm btn-primary" onclick="">Add to Basket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}