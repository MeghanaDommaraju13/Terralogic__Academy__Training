import React from "react";

function ListUseage() {
    const items = [
        {id:1, name: "Apple"},
        {id:2, name: "Banana"},
        {id:3, name: "Cherry"},

    ];
    return (
        <ul>
            {items.map(items =>(
                <li key ={items.id}>
                    {items.name}

                </li>
            ))}
        </ul>
    );

    
}

export default ListUseage; 