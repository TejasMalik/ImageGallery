import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import ImageView from './components/ImageView'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact></Route>
                <Route path='/image/:id' component={ImageView}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router