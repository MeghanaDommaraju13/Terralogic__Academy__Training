// parentComponent.tsx

import ChildComponent from "./ChildComponent";

function ParentComponent() {
    const handleChildClick = () => {
        alert(`Alert from the child`);
    };
    return (
        <ChildComponent onButtonclick={handleChildClick}/>
    );
}

export default ParentComponent; 