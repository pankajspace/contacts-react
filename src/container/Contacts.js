import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Navigation from '../components/Navigation';
import ContactList from '../components/ContactsList';
import ContactCreate from '../components/ContactsCreate';

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { name: "pankaj", address: "pune", phone: 123456789, email: "pankaj.corp@gmail.com", notes: "note about pankaj" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navigation />                
                <div className="col-sm-12 col-md-12">
                    <Switch>
                        <Route path="/contacts/list" component={() => <ContactList contacts={this.state.contacts} />} />
                        <Route path="/contacts/create" component={ContactCreate} />
                        <Redirect from="*" to="/contacts/list" />
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}

export default Contacts;