// A more common way using a ternary operator inside JSX;

import React  from "react";



function Greeting(props: any) {
    return (
        <div>
            {props.isLoggedIn ?(
                props.isAuthorized? <h1>You are authorized</h1>: <h1>You are not allowed</h1>
            ):(
                <h1>Please log in</h1>
            )}
        </div>
    );
}

export default Greeting;

