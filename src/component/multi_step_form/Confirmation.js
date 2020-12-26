import { NavigationFullscreenExit } from 'material-ui/svg-icons';
import React, { Component } from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import {List, ListItem} from 'material-ui/List';
// import RaisedButton from 'material-ui/RaisedButton'
// import styles from './multiStep.module.css'
import {ItemList,BtnWrapper,Heading} from './FormElements'

export class Confirmation extends Component {
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
        const {values:{firstName, lastName, email, occupation, city, bio}} = this.props;
        return (
            
                <React.Fragment>
                    
                    
                    {/* <AppBar title="confirm user data"></AppBar> */}
                    <Heading ><h4>Applicant's details</h4></Heading>
                    <ItemList>
                        
                        <span>
                            <h6>First Name</h6>
                            <h6 className="value">John</h6>
                        </span>

                        <span>
                            <h6>Last Name</h6>
                            <h6 className="value">Doe</h6>
                        </span>

                        <span>
                            <h6>email</h6>
                            <h6 className="value">Johndoe@gmail.com</h6>
                        </span>
                        <span>
                            <h6>Occupation</h6>
                            <h6 className="value">self-employed</h6>
                        </span>
                        <span>
                            <h6>City</h6>
                            <h6 className="value">Abuja</h6>
                        </span>
                        <span>
                            <h6>Height</h6>
                            <h6 className="value">1.78m</h6>
                        </span>
                        <span>
                            <h6>Weight</h6>
                            <h6 className="value">70kg</h6>
                        </span>
                        <span>
                            <h6>Gender</h6>
                            <h6 className="value">male</h6>
                        </span>
                        <span>
                            <h6>Marital Status</h6>
                            <h6 className="value">Single</h6>
                        </span>
                        
                    </ItemList>
                    
                    <BtnWrapper >
                    <button onClick={this.back} className="btn waves-effect waves-light #0d47a1 blue darken-4">
                            BACK
                    </button>
                    <button onClick={this.continue} className="btn waves-effect waves-light #0d47a1 blue darken-4">
                            SUBMIT
                    </button>
                    </BtnWrapper>
                           
                </React.Fragment>
            
        )
    }
}
export default Confirmation
// const styles={
    
// }


