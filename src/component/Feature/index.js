import React from 'react'
import {FeatureContainer, FeatureButton} from './FeatureElements'
import {Link} from 'react-router-dom'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>DSSC 29</h1>
            <p>The Nigerian Navy wish to announce to the
                general public that the form for Direct Short Service Course 29 (DSSC29) is out.
                Interested nigerians can apply. All Applications close on 22:10:2021 00:30 hours.
                Details <Link to='/details'>Here</Link>
            </p>
            <Link to='/register'><FeatureButton>Apply</FeatureButton></Link>
            
        </FeatureContainer>
    )
}

export default Feature