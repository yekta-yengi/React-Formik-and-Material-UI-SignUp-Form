import React from 'react'
import {Formik,Field,Form} from 'formik';
import { Grid,Paper } from '@mui/material'
import {makeStyles} from '@mui/styles'
import Textfield from '../../../Components/Textfield'
import Button from '../../../Components/Button'

const useStyles = makeStyles({
    gridContainerStyles: {
        justifyContent: "center",
        alignItems: "center",
        direction: "column",
        marginTop: 15,
    }
});

function Form1() {

    const classes = useStyles();

    return (
        <Form>
            <Paper elevation={10} >

                <Grid container  className={classes.gridContainerStyles} spacing={4} paddingRight={3} paddingLeft={3} paddingBottom={4} >
                    <Grid item xs={12} >
                        <h1>Sign Up - Get your new account</h1>
                    </Grid>

                    {/* Name Input */}
                    {/*It will cover whole colon on small screens, on middle screens colon 8 units, on large scale 6 units*/}
                    <Grid item xs={12} md={8} lg={6}>
                        <Textfield
                            name="firstName"
                            label="First Name"
                        />
                    </Grid>

                    {/* Surname Input */}
                    <Grid item xs={12} md={8} lg={6}>
                        <Textfield
                            name="lastName"
                            label="Last Name"
                        />
                    </Grid>

                    {/* Email Input */}
                    <Grid item xs={12} md={8} lg={12}>
                        <Textfield
                            name="email"
                            label="foo@mail.com"
                        />
                    </Grid>

                    {/*Password*/}
                    <Grid item xs={12} md={8} lg={12}>
                        <Textfield
                            type="password"
                            name="password"
                            label="Password"
                        />
                    </Grid>

                    {/*Confirm Password*/}
                    <Grid item xs={12} md={8} lg={12}>
                        <Textfield
                            type="password"
                            name="confirm_password"
                            label="Confirm Password"
                        />
                    </Grid>


                    {/* Next button to change the form to second form page */}
                    <Grid item xs={12} md={8} lg={8}>
                        <Button>
                            Next
                        </Button>
                    </Grid>
                </Grid>    
            </Paper>
        </Form>


    )
}

export default Form1
