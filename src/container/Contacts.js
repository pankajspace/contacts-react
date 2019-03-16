import React, { Component } from 'react';

import ContactList from '../components/ContactsList';
import Navigation from '../components/Navigation';

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
                <div className="pad-10-px">
                    <div className="col-sm-12 col-md-12 txt-right" >
                        <button type="button" className="btn btn-secondary">
                            Create Contact <span className="badge badge-success">+</span>
                        </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12">
                    <ContactList contacts={this.state.contacts} />
                </div>
            </React.Fragment>
        )
    }
}

export default Contacts;