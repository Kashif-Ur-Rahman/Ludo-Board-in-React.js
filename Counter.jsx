import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

   let increaseCount= () => {
        setCount(count + 1);
        // console.log(count);
        
    }

    return (
        <div>
            <h3 style={{ backgroundColor: 'black', padding: '10px', width: '150px', marginLeft: '550px', borderRadius: '5px' }}>Count = {count}</h3>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
};