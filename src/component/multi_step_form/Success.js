import React, { Component } from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import {FormWrapper} from './FormElements'


export class Success extends Component {
    continue = e=>{
        e.preventDefault();
        //process form here//
        this.props.nextStep();
    }

    back = e=>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        // const {values:{firstName, lastName, email, occupation, city, bio}} = this.props;
        return (
            
                <React.Fragment>
                    <FormWrapper>
                    {/* <AppBar title="succesfully registered"></AppBar> */}
                    <h1>Thank You For Your Submission</h1>
                    <p>You will get an email with further instructions</p>
                    </FormWrapper>
                </React.Fragment>
            
        )
    }
}

// const styles={
//     button:{
//         margin:15
//     }
// }

export default Success
