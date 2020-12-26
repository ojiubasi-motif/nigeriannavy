import React, { Component } from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton'
import {FormWrapper,Heading} from './FormElements'

export class FormUserDetails extends Component {
    continue = e=>{
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values, handleChange} = this.props;
        return (
            
                <React.Fragment>
                   
                    <FormWrapper>
                    <h4>Personal Details</h4>
            <form onSubmit={null} encType="multipart/form-data">
                <input type="text"
                        placeholder="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        /> 
                <input type="text"
                        placeholder="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}/>
                
                <input type="text"
                        placeholder="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}/>
                 <input type="text"
                        placeholder="Phone"
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}/>
                        <span>
                    <button onClick={this.back} className="btn waves-effect waves-light #0d47a1 blue darken-4">
                                BACK
                    </button>
                    <button onClick={this.continue} className="btn waves-effect waves-light #0d47a1 blue darken-4">
                            CONTINUE
                    </button>
                    </span> 
            </form>
        </FormWrapper>
                    {/* <FormWrapper>
                    <AppBar title="Enter user details"></AppBar>
                    <TextField hintText="Enter your first name"
                                floatingLabelText="First Name"
                                onChange={handleChange('firstName')}
                                defaultValue={values.firstName}
                    ></TextField>
                    <br/>
                    <TextField hintText="Enter your last name"
                                floatingLabelText="Last Name"
                                onChange={handleChange('lastName')}
                                defaultValue={values.lastName}
                    ></TextField>
                    <br/>
                    <TextField hintText="Enter your email"
                                floatingLabelText="email"
                                onChange={handleChange('email')}
                                defaultValue={values.email}
    
                    ></TextField>
                    <br/>
                    <RaisedButton label="Continue"
                                    primary={true}
                                    style={styles.button}
                                    onClick={this.continue}></RaisedButton>
                                    </FormWrapper> */}
                </React.Fragment>
            
        )
    }
}

const styles={
    button:{
        margin:15
    }
}

export default FormUserDetails
