import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProductListing from './components/product/ProductListing';
import ProductDetail from './components/product/ProductDetail';


const App = () => {
    return (<>
        <div>


            <Router>

                <Router>
                    <Switch>
                        <Route path='/' exact component={ProductListing} />
                        <Route path='/product/:productID' exact component={ProductDetail} />
                        <Route>page not found!</Route>
                    </Switch>
                </Router>
            </Router>
        </div>
    </>)
}

export default App
