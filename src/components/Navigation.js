import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <NavLink
                    to="/contacts/list"
                    exact
                    className="nav-link"
                    activeClassName="active"
                >Contacts List</NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    to="/contacts/create/"
                    exact
                    className="nav-link"
                    activeClassName="active"
                >Create Contact</NavLink>
            </li>
        </ul>
    )
}

export default Navigation;