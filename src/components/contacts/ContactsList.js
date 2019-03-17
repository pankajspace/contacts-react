import React from 'react';

import styles from './ContactsList.module.css';

import * as CONSTANTS from '../../constants/constants';

const ContactList = (props) => {

    const renderContactNames = () => {
        return props.contactsList.map((contact, index) => {
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
            <div className={`${styles.contacts_list_item_header} col-sm-2`} >{CONSTANTS.name}</div>
            <div className={`${styles.contacts_list_item_header} col-sm-3`} >{CONSTANTS.address}</div>
            <div className={`${styles.contacts_list_item_header} col-sm-2`} >{CONSTANTS.phone}</div>
            <div className={`${styles.contacts_list_item_header} col-sm-2`} >{CONSTANTS.email}</div>
            <div className={`${styles.contacts_list_item_header} col-sm-3`} >{CONSTANTS.notes}</div>
            {renderContactNames()}
        </div>
    )
}

export default ContactList;
