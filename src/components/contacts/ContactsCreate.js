import React from 'react';

import styles from './ContactCreate.module.css';

import * as CONSTANTS from '../../constants/constants';
import TextField from '../common/TextField';
import TextArea from '../common/TextArea';

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
                    <TextField
                        data={
                            {
                                handleInputChange: props.handleInputChange,
                                placeholder: CONSTANTS.namePlaceholder,
                                label: CONSTANTS.name,
                                name: "name",
                                value: props.formData.name,
                                isRequired: true,
                                isError: props.validationFlags.nameError,
                                errorMessage: CONSTANTS.nameError,
                                className: "form-control"
                            }
                        }
                    />
                </div>
                <div className="form-group">
                    <TextArea
                        data={
                            {
                                handleInputChange: props.handleInputChange,
                                placeholder: CONSTANTS.addressPlaceholder,
                                label: CONSTANTS.address,
                                name: "address",
                                value: props.formData.address,
                                isRequired: true,
                                isError: props.validationFlags.addressError,
                                errorMessage: CONSTANTS.addressError,
                                className: "form-control"
                            }
                        }
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
                    <TextArea
                        data={
                            {
                                handleInputChange: props.handleInputChange,
                                placeholder: CONSTANTS.notesPlaceholder,
                                label: CONSTANTS.notes,
                                name: "notes",
                                value: props.formData.notes,
                                isRequired: false,
                                className: "form-control"
                            }
                        }
                    />
                </div>
                <button onClick={props.handleSubmit} className="btn btn-primary">{CONSTANTS.submit}</button>
            </div>
        </div>
    )
}

export default ContactCreate;
