import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonNavigation() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        // ... from submission login
        navigate('/success'); // Navigation to the /success page
    };
    return(
        <form onSubmit = {handleSubmit}>
            {/* ...from input */}
            <button type = "submit">Submit</button>
        </form>
    );

}

export default ButtonNavigation
