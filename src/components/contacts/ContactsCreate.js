import React from 'react';

import styles from './ContactCreate.module.css';

import * as CONSTANTS from '../../constants/constants';

const ContactCreate = (props) => {

    const renderMessage = () => {
        if (props.submitSuccess) {
            return (
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Well done!</h4>
                    {CONSTANTS.formSuccess}
                </div>
            )
        }
        if (props.submitSuccess === false) {
            return (
                <div className="alert alert-danger" role="alert">
                    {CONSTANTS.formError}
                </div>
            )
        }
    }

    return (
        <div className={`row ${styles.contacts_form}`}>
            <div className="col-sm-8 offset-sm-2">
                {renderMessage()}
                <div className="form-group">
                    <label htmlFor="name">{CONSTANTS.name}*</label>
                    <input type="text" value={props.formData.name}
                        onChange={props.handleInputChange}
                        className="form-control" name="name" id="name" placeholder="Enter your name."
                    />
                    {
                        props.validationFlags.nameError ?
                            <div className="alert alert-danger" role="alert">
                                {CONSTANTS.nameError}
                            </div> : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="address">{CONSTANTS.address}</label>
                    <textarea value={props.formData.address}
                        onChange={props.handleInputChange}
                        className="form-control" name="address" id="address" placeholder="Enter your address."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">{CONSTANTS.phone}*</label>
                    <input type="number" value={props.formData.phone}
                        onChange={props.handleInputChange}
                        className="form-control" name="phone" id="phone" placeholder="Enter your phone."
                    />
                    {
                        props.validationFlags.phoneError ?
                            <div className="alert alert-danger" role="alert">
                                {CONSTANTS.phoneError}
                            </div> : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="email">{CONSTANTS.email}*</label>
                    <input type="email" value={props.formData.email}
                        onChange={props.handleInputChange}
                        className="form-control" name="email" id="email" placeholder="Enter your email."
                    />
                    {
                        props.validationFlags.emailError ?
                            <div className="alert alert-danger" role="alert">
                                {CONSTANTS.emailError}
                            </div> : null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="notes">{CONSTANTS.notes}</label>
                    <textarea value={props.formData.notes}
                        onChange={props.handleInputChange}
                        className="form-control" name="notes" id="notes" placeholder="Enter your notes."
                    />
                </div>
                <button onClick={props.handleSubmit} className="btn btn-primary">{CONSTANTS.submit}</button>
            </div>
        </div>
    )
}

export default ContactCreate;
