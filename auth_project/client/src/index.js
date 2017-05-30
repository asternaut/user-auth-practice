import React from 'react';
import ReactDOM from 'react-dom';
import {Router,
        Route,
        browserHistory,
        IndexRoute}
        from 'react-router'

import App from './App';
import {LoginContainer, SignUpContainer, ShowLoginContainer, ShowUserContainer, ErrorContainer} from './containers';
require('bootstrap/dist/css/bootstrap.css');

ReactDOM.render(
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <Route path="/login" components={LoginContainer} />
    <Route path="/signup" components={SignUpContainer} />
    <Route path='/show' components={ShowLoginContainer}/>
    <Route path='/user/:user_id' components={ShowUserContainer} />
    <Route path='/error/:error' components={ErrorContainer}/>
    <IndexRoute component={LoginContainer}/>
  </Route>
</Router>, document.getElementById('root'));
