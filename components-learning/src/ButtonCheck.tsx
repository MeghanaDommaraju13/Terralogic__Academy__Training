function ButtonCheckComponent() {
    const handleClick=()=>{
        alert("Button Was Clicked!");
    };
    return(
        <button onClick={handleClick}>Click Me</button>
    );
}

export default ButtonCheckComponent; 