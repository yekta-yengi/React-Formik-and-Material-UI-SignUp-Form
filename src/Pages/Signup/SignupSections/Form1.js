import React from 'react'
import {Formik,Field,Form} from 'formik';
import { Grid,Paper } from '@mui/material'
import {makeStyles} from '@mui/styles'
//ciğerimi söktün be directory src için 3 tane .. gerek unutma koçum
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
                        <h1>SIGN UP</h1>
                    </Grid>

                    {/* Name Input */}
                    {/* Dar ekranda bütün kolonu kaplıycak, ortada 8 kolon, genişte 6 kolon - yarısı kaplayacak */}
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
                            name="password"
                            label="Password"
                        />
                    </Grid>

                    {/*Confirm Password*/}
                    <Grid item xs={12} md={8} lg={12}>
                        <Textfield
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
