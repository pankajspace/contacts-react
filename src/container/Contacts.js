import React, { Component } from 'react';

import ContactList from '../components/ContactsList';

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
                <div className="row pad-10-px">
                    <div className="col-sm-6 col-md-6">
                        <h2>Contacts</h2>
                    </div>
                    <div className="col-sm-6 col-md-6 txt-right" >
                        <button type="button" class="btn btn-secondary">
                            Create Contact <span class="badge badge-success">+</span>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <ContactList contacts={this.state.contacts} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contacts;