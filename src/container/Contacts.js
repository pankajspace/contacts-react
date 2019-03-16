import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navigation from '../components/Navigation';
import ContactList from '../components/ContactsList';
import ContactCreate from '../components/ContactsCreate';

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactsList: [
                { name: "pankaj", address: "pune", phone: 123456789, email: "pankaj.corp@gmail.com", notes: "note about pankaj" },
            ],
            formData: {
                name: "",
                address: "",
                phone: "",
                email: "",
                notes: ""
            },
            submitSuccess: false
        }
    }

    handleChange = (event) => {
        // console.log("handleChange", event.target.value);
        const formData = { ...this.state.formData };
        this.setState({
            formData: {
                ...formData,
                [event.target.name]: event.target.value
            },
            submitSuccess: false
        });
    }

    handleSubmit = (event) => {
        // console.log("handleSubmit", event);
        const formData = { ...this.state.formData };
        const contactsList = [...this.state.contactsList];
        this.setState({
            formData: {
                name: "",
                address: "",
                phone: "",
                email: "",
                notes: ""
            },
            contactsList: [
                ...contactsList,
                formData
            ],
            submitSuccess: true
        });
        document.documentElement.scrollTop = 0;
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div className="col-sm-12 col-md-12">
                    <Switch>
                        <Route path="/contacts/list"
                            render={() =>
                                <ContactList
                                    contactsList={this.state.contactsList} />
                            }
                        />
                        <Route path="/contacts/create"
                            render={() =>
                                <ContactCreate
                                    formData={this.state.formData}
                                    submitSuccess={this.state.submitSuccess}
                                    handleChange={this.handleChange}
                                    handleSubmit={this.handleSubmit} />
                            }
                        />
                        <Redirect from="*" to="/contacts/list" />
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}

export default Contacts;