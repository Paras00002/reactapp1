import React from "react";

function Train(){
    const element=React.createElement('h2',{style:{'color':'blue'}},'welcome program');
    return (
        <div>
            {element}
            <h2>welcome to train</h2>
        </div>
    )
}
export default Train;