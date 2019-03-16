import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <NavLink
                    to="/contacts/"
                    exact
                    activeClassName="active"
                    className="nav-link"
                >Contacts List</NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    to="/contacts/create/"
                    exact
                    activeClassName="active"
                    className="nav-link"
                >Create Contact</NavLink>
            </li>
        </ul>
    )
}

export default Navigation;