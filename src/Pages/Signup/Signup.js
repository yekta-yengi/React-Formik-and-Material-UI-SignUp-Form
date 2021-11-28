import React from 'react'
import { Grid} from '@mui/material'
import {Formik,Field,Form} from 'formik';
import * as Yup from 'yup';
import {makeStyles} from '@mui/styles'
import Form1 from './SignupSections/Form1'


//const background_color = 'linear-gradient(100deg, #f6d365 0%, #fda085 70%)';

const useStyles = makeStyles({
    gridContainerStyles: {
        background: 'linear-gradient(100deg, #f6d365 0%, #fda085 70%)',
        height: '100vh',
        width: '100vh'
    }
});

const INITIAL_FORM_STATE = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirm_password:''
}


const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
        .min(2)
        .max(15)
        .required('Required'),
    lastName: Yup.string()
        .min(2)
        .max(15)
        .required('Required'),
    password: Yup.string()
        .min(8)
        .max(25)
        .required('Required'),
    confirm_password: Yup.string()
        .min(6)
        .when("password", {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Both password need to be the same"
          ),
        })
        .required("Confirm Password Required"),
    email: Yup.string()
        .email('Invalid Email')
        .required('Required'),
  });


function Signup() {

    const classes = useStyles();

    return (
        <Formik 
            initialValues={{...INITIAL_FORM_STATE}}
            validationSchema = {FORM_VALIDATION}
            onSubmit={values => {
                console.log(values);
            }}
        > 
            <Grid container className={classes.gridContainerStyles}>

                <Grid item xs sm={0}></Grid>
                {/* I can change the margin when i the add navbar */}
                <Grid item xs marginTop={15} >
                    <Form1/>
                </Grid>
                <Grid item xs sm={0}></Grid>

            </Grid>
        </Formik>
    )
}

export default Signup
