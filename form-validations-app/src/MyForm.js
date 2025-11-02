import React from 'react';
import MyInput from './MyInput';

const MyForm = () => {
    const fromConfig = {
        name: {
            label: "Your Name",
            type: "text",
            validation: {require: true},
        },
        email: {
            label: "Your Email",
            type: "email",
            validation: {required: true, isEmail: true},
        },
    };
    return (
        <form>
            {Object.keys(fromConfig).map((key) => (
                <MyInput key = {key} label = {fromConfig[key].label} type = {fromConfig[key].type} />
            ))}
        </form>
    
    )
}

export default MyForm;
