import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <NavLink to="/contacts/list" exact className="nav-link" activeClassName="active" >
                    <h4>Contacts List</h4>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contacts/create/" exact className="nav-link" activeClassName="active">
                    <h4>Create Contact</h4>
                </NavLink>
            </li>
        </ul>
    )
}

export default Navigation;