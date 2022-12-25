import React from 'react';
import Header from './Header';
import Cards from './Cards';
import SwipeButtom from './SwipeButton';
import Welcome from './Welcome';
import Chat from './Chat';
import { BrowserRouter, Route, Switch, Link,} from 'react-router-dom';
import './css/App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';

const App = () => {
    const user = true;
    return (
        <div className="App">
                <BrowserRouter>
                <Switch>
                    <Route path="/chat" exact>
                        <Header back="/" />
                        <Chat />
                    </Route>
                    <Route path="/" exact>
                        <Header />
                        <Cards />
                        <SwipeButtom />
                    </Route>
                    <Route path = "/account" exact>
                        <Header back="/" />
                        <div>account</div>
                    </Route>
                </Switch>
                </BrowserRouter>
        </div>
    );
};

export default withAuthenticator(App);

{/* log in*/}
{/* card */}
{/* buttom*/}

{/*Chats screen*/}
{/* individual char screen*/}