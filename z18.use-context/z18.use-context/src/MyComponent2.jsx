import {useContext}  from 'react';
import {UserContext} from './MyComponent.jsx';
import MyComponent3 from './MyComponent3.jsx';

function MyComponent2(){
    	
    const user = useContext(UserContext);

    return(<div className='box'>

        <h1>ComponentC</h1>
        <h2>Hello again {user}</h2>
        <MyComponent3></MyComponent3>
     </div>)
}

export default MyComponent2 