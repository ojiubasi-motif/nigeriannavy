import React, { Component } from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton'
import {FormWrapper,Heading} from './FormElements'

export class FormPersonalDetails extends Component {
    continue = e=>{
        e.preventDefault();
        this.props.nextStep();
    };

    back = e=>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values, handleChange} = this.props;
        return (
            
                <React.Fragment>
                    
                    <FormWrapper>
                   <h4>Bio</h4>
                    <form onSubmit={null} encType="multipart/form-data">
                <input type="text"
                        placeholder="Weight"
                        onChange={handleChange('weight')}
                        defaultValue={values.weight}
                        /> 
                <input type="text"
                        placeholder="Height"
                        onChange={handleChange('height')}
                        defaultValue={values.height}/>
                
                <input type="text"
                        placeholder="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}/>
                 <input type="text"
                        placeholder="Gender"
                        onChange={handleChange('gender')}
                        defaultValue={values.gender}/>     
                    {/* <div class="input-field col s12">
                        <select>
                        <option value="" disabled selected>Choose one</option>
                        <option value="1">Female</option>
                        <option value="2">Male</option>
                        
                        </select>
                        <label>Gender</label>
                    </div> */}
                <span>
                    <button onClick={this.back} className="btn waves-effect waves-light #0d47a1 blue darken-4">
                                BACK
                    </button>
                    <button onClick={this.continue} className="btn waves-effect waves-light #0d47a1 blue darken-4">
                            CONTINUE
                    </button>
                    </span>
            </form>
{/* 
                    <TextField hintText="Enter your occupation"
                                floatingLabelText="occupation"
                                onChange={handleChange('occupation')}
                                defaultValue={values.occupation}
                    ></TextField>
                    <br/>
                    <TextField hintText="Enter your city"
                                floatingLabelText="city"
                                onChange={handleChange('city')}
                                defaultValue={values.city}
                    ></TextField>
                    <br/>
                    <TextField hintText="Enter your bio"
                                floatingLabelText="bio"
                                onChange={handleChange('bio')}
                                defaultValue={values.bio}
    
                    ></TextField>
                    <br/> */}
                    {/* <RaisedButton label="Continue"
                                    primary={true}
                                    style={styles.button}
                                    ></RaisedButton>
                    <RaisedButton label="Back"
                                    primary={false}
                                    style={styles.button}
                                    ></RaisedButton> */}
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

export default FormPersonalDetails
