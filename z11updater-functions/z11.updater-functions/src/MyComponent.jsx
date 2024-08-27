import {useState} from  'react';

function MyComponent(){
    const [count, setCount] = useState(0);

    function increment() { 
       // setCount(count + 1); is wrong
        setCount(c => c + 1);
    }

    function reset() {
        setCount(0);
    }
    
    function decrement() {
        setCount(c => c - 1);
     
    }
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
            <button onClick={increment}>increment</button>
        </div>
    )
}

export default MyComponent 