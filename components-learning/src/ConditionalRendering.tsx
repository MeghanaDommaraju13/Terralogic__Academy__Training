import React from "react";

type Iprops = {
    isLoggedIn : boolean;
    defaultProps?: boolean;
}

const ConditionalRendering = (props: Iprops) => {
    const { isLoggedIn, defaultProps = "No Val from Parent"} = props;
    console.log("defaultProps" , defaultProps);

    const checkIfUserHasAccount = (hasAccount: boolean) => {
        if (hasAccount) return <h1>User Can Login</h1>;
        return <h1>User Need to Register</h1>;
    };
    return (
        <div>{isLoggedIn ? <h1>Yes, Login</h1> : checkIfUserHasAccount(false)}</div>
    );

}; 

export default ConditionalRendering;
