import React from 'react';

import styles from './ContactCreate.module.css';

import * as constants from '../constants/constants';

const ContactCreate = (props) => {

    return (
        <div className={`row ${styles.contacts_form}`}>
            <div className="col-sm-8 offset-sm-2">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">{constants.name}</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">{constants.address}</label>
                        <textarea className="form-control" name="address" id="address" placeholder="Enter your address." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">{constants.phone}</label>
                        <input type="text" className="form-control" name="phone" id="phone" placeholder="Enter your phone." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">{constants.email}</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">{constants.notes}</label>
                        <textarea className="form-control" name="notes" id="notes" placeholder="Enter your notes." />
                    </div>
                    <button type="submit" className="btn btn-primary">{constants.submit}</button>
                </form>
            </div>
        </div>
    )
}

export default ContactCreate;
