import React from 'react';

const TextField = (props) => {

    const renderErrorMessage = () => {
        if (props.data.isRequired && props.data.isError) {
            return (
                <div className="alert alert-danger" role="alert">
                    {props.data.errorMessage}
                </div>
            )
        }
    }

    return (
        <React.Fragment>
            <label htmlFor={props.data.name}>{props.data.label}*</label>
            <input type="text" value={props.data.value}
                onChange={props.data.handleInputChange}
                className={props.data.className} name={props.data.name}
                id={props.data.name} placeholder={props.data.placeholder}
            />
            {renderErrorMessage()}
        </React.Fragment>
    )
}

export default TextField;
