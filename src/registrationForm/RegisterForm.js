import React from 'react';
import './style.css';
import RegisteredForm from './RegisteredForm';


class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      regForm: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    // fields[e.target.gender] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm(e)) {
        // let fields = {};
        // fields["username"] = "";

        // fields["gender"] = "";
        // fields["address"] = "";
        // fields["dateOfBirth"] = "";

        // fields["emailid"] = "";
        // fields["mobileno"] = "";
        // fields["password"] = "";
        // this.setState({fields:fields});
        // alert("Form submitted");
        this.setState({ regForm: true });
    }
  }

  validateForm(form) {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!form.target.gender[1].checked && !form.target.gender[1].checked && !form.target.gender[1].checked) {
      if (!fields["gender"]) {
        formIsValid = false;
        errors["gender"] = "*Please select your gender.";
      }
    }


    // if((fields.gender[0].checked === false) && (fields.gender[1].checked === false) && (fields.gender[2].checked === false)){
    //   formIsValid = false;
    //   errors["gender"] = "*Please select your gender.";
    // }

    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter your address.";
    }

    if (!fields["dateOfBirth"]) {
      formIsValid = false;
      errors["dateOfBirth"] = "*Please enter your date of birth.";
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      // if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
      if (!fields["password"].match("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }



  render() {
    return (
      <div id="main-registration-container">
        {!this.state.regForm ?
          <div id="register">
            <h3>Registration page</h3>
            <form name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
              <label>Name</label>
              <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.username}</div>


              <label>Gender: </label>
              <input className="radio" type="radio" name="gender" id="male" value="male" onChange={this.handleChange} />Male
          <input className="radio" type="radio" name="gender" id="female" value='female' onChange={this.handleChange} /> Female
          <input className="radio" type="radio" name="gender" id="other" value='others' onChange={this.handleChange} /> Other
          <div className="errorMsg">{this.state.errors.gender}</div>

              <label>Address: </label>
              <textarea className="textArea" type="text-area" name="address" value={this.state.fields.address} onChange={this.handleChange}></textarea>
              <div className="errorMsg">{this.state.errors.address}</div>

              <label>DOB: </label>
              <input type="date" name="dateOfBirth" value={this.state.fields.dateOfBirth} onChange={this.handleChange}></input>
              <div className="errorMsg">{this.state.errors.dateOfBirth}</div>

              <label>Email ID:</label>
              <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.emailid}</div>
              <label>Mobile No:</label>
              <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.mobileno}</div>
              <label>Password</label>
              <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.password}</div>
              <input type="submit" className="button" value="Register" />
            </form>
          </div> : <div></div>}
        {this.state.regForm ? <RegisteredForm info={this.state} /> : <div></div>}
      </div>

    );
  }


}


export default RegisterForm;