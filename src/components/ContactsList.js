import React from 'react';

import styles from './ContactsList.module.css';

import * as constants from '../constants/constants';

const ContactList = (props) => {

    const renderContactNames = () => {
        return props.contacts.map((contact, index) => {
            return (
                <React.Fragment key={index} >
                    <div className={`${styles.contacts_list_item} col-sm-2`} >{contact.name}</div>
                    <div className={`${styles.contacts_list_item} col-sm-3`} >{contact.address}</div>
                    <div className={`${styles.contacts_list_item} col-sm-2`} >{contact.phone}</div>
                    <div className={`${styles.contacts_list_item} col-sm-2`} >{contact.email}</div>
                    <div className={`${styles.contacts_list_item} col-sm-3`} >{contact.notes}</div>
                </React.Fragment>
            )
        });
    }

    return (
        <div className={"row contacts_list"}>
            <div className={`${styles.contacts_list_item_header} col-sm-2`} >{constants.name}</div>
            <div className={`${styles.contacts_list_item_header} col-sm-3`} >{constants.address}</div>
            <div className={`${styles.contacts_list_item_header} col-sm-2`} >{constants.phone}</div>
            <div className={`${styles.contacts_list_item_header} col-sm-2`} >{constants.email}</div>
            <div className={`${styles.contacts_list_item_header} col-sm-3`} >{constants.notes}</div>
            {renderContactNames()}
        </div>
    )
}

export default ContactList;
