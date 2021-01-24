import React from 'react'

import { Items } from './Items'

export const Main = () => {
    return (
        <main className="container">
            <div className="starter-template text-center px-3">
                <h1>Single Page Shopping Site Sample!</h1>
                <p className="lead">
                    This Single Page App (SPA) developped by saman_shahin@yahoo.com in 
                    <span className="title1">ReactJS</span>
                </p>
                <p>For source code and explanation
                        pleasse refer to <a href="https://github.com/samanshahin" target="_blank">my github page</a>.
                </p>
            </div>
            <Items />
        </main>
    )
}
