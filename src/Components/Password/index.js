import React from 'react'
import { TextField} from '@mui/material'
import { useField } from 'formik';

// I'll try to add functionality to the password section 
const Password = ({
    name,
    ...otherProps
}) => {

    const[field,meta] = useField(name);
    
    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth : true,
        variant: 'outlined'
    }

    if (meta && meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
      }
    
    return(
        <TextField {...configTextfield}/>
    );
};

export default Password;