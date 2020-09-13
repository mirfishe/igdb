import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import Popular from '../search/Popular';
import Recent from '../search/Recent'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/popular">Popular</Link></li>
                    <li><Link to="/recent">Recent</Link></li>
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/popular"><Popular /></Route>
                    <Route exact path="/recent"><Recent /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;