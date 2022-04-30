import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './components/Detail';
import Animation from './components/Animation';
import Branding from './components/Branding';
import Mobile from './components/Mobile';
import Illustration from './components/Illustration';
import Print from './components/Print';
import Webdesign from './components/Webdesign';
import Typography from './components/Typography';
import Productdesign from './components/Productdesign';
import { PositionContext } from './features/contexts/PositionContext';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";

function App() {
  const [position, setPosition] = useState(0);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/shots/popular"/>
          </Route>
          <PositionContext.Provider value={{position, setPosition}}>
          <Route path="/shots/popular" component={Home} />
          <Route path="/shots/animation" component={Animation} />
        
          <Route path="/shots/branding">
            <Branding/>
          </Route>
          <Route path="/shots/illustration">
            <Illustration/>
          </Route>
          <Route path="/shots/mobile">
            <Mobile/>
          </Route>
          <Route path="/shots/productdesign">
            <Productdesign/>
          </Route>
          <Route path="/shots/print">
            <Print/>
          </Route>
          <Route path="/shots/typography">
            <Typography/>
          </Route>
          <Route path="/shots/webdesign">
            <Webdesign/>
          </Route>

          <Route path="/detail/:id">
            <Detail/>
          </Route>
        </PositionContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
