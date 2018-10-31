import React, { Component } from 'react';

class RegisteredForm extends Component {

    constructor(props){
        super(props);
    }

    render() { 
        return (  
            <div>
                <h1>Registered Info!!!</h1>

                <h2>Name: {this.props.info.fields.username}</h2>
                <h2>Gender: {this.props.info.fields.gender}</h2>
                <h2>DOB: {this.props.info.fields.dateOfBirth}</h2>
                <h2>Address: {this.props.info.fields.address}</h2>
                <h2>Email-ID: {this.props.info.fields.emailid}</h2>
                <h2>Mobile Number: {this.props.info.fields.mobileno}</h2>
            </div>
        );
    }
}
 
export default RegisteredForm;