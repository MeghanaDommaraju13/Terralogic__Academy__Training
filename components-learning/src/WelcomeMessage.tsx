import React from "react";

function WelcomeMessage(props: any) {
    const isLoggedIn = props.isLoggedIn;
    
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;

    }
    return <h1>Please log in</h1>;
}

export default WelcomeMessage;