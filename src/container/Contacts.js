import React, { Suspense, lazy, Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { validateEmail } from '../utils/utils';
import Navigation from '../components/contacts/Navigation';

const ContactCreate = lazy(() => import('../components/contacts/ContactsCreate'));
const ContactList = lazy(() => import('../components/contacts/ContactsList'));

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
            validationFlags: {
                nameError: false,
                addressError: false,
                phoneError: false,
                emailError: false
            },
            submitSuccess: null
        }
    }

    handleInputChange = (event) => {
        // console.log("handleInputChange", event.target.value);
        const formData = { ...this.state.formData };
        this.setState({
            formData: {
                ...formData,
                [event.target.name]: event.target.value
            },
            validationFlags: {
                nameError: false,
                addressError: false,
                phoneError: false,
                emailError: false
            },
            submitSuccess: false
        });
    }

    validateContactsForm = (formData) => {
        let nameError = false;
        let addressError = false;
        let phoneError = false;
        let emailError = false;

        if (formData.name.trim().length === 0) {
            nameError = true;
        }

        if (formData.address.trim().length === 0) {
            addressError = true;
        }

        if (formData.phone.trim().length === 0) {
            phoneError = true;
        }

        if (formData.email.trim().length === 0 || validateEmail(formData.email.trim()) === false) {
            emailError = true;
        }

        if (nameError || addressError || phoneError || emailError) {
            this.setState({
                submitSuccess: false,
                validationFlags: {
                    nameError: nameError,
                    addressError: addressError,
                    phoneError: phoneError,
                    emailError: emailError
                }
            })
            document.documentElement.scrollTop = 0;
            return false;
        }

        document.documentElement.scrollTop = 0;
        return true;
    }

    submitContactsForm = (formData) => {
        const contactsList = [...this.state.contactsList];
        this.setState({
            formData: {
                name: "",
                address: "",
                phone: "",
                email: "",
                notes: ""
            },
            validationFlags: {
                nameError: false,
                addressError: false,
                phoneError: false,
                emailError: false
            },
            contactsList: [
                ...contactsList,
                formData
            ],
            submitSuccess: true
        });
        document.documentElement.scrollTop = 0;
    }

    handleSubmit = (event) => {
        // console.log("handleSubmit", event);
        const formData = { ...this.state.formData };
        if (this.validateContactsForm(formData) === false) {
            return false;
        }
        this.submitContactsForm(formData);
        event.preventDefault();
    }

    render() {
        return (
            // <React.Fragment>
            <Suspense fallback={<div>Loading...</div>}>
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
                                    validationFlags={this.state.validationFlags}
                                    submitSuccess={this.state.submitSuccess}
                                    handleInputChange={this.handleInputChange}
                                    handleSubmit={this.handleSubmit} />
                            }
                        />
                        <Redirect from="*" to="/contacts/list" />
                    </Switch>
                </div>
            </Suspense>
            // </React.Fragment>
        )
    }

}

export default Contacts;