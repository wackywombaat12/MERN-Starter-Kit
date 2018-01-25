import React, { Component } from 'react';

export default class Login extends Component {

    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div className='formErrors'>
                {Object.keys(this.props.formErrors).map((fieldName, i) => {
                if(this.props.formErrors[fieldName].length > 0){
                    return (
                    <p key={i}>{fieldName} {this.props.formErrors[fieldName]}</p>
                    )        
                } else {
                    return '';
                }
                })}
            </div>
        )
    }
};