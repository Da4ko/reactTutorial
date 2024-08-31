
import MyComponent1 from './MyComponent1.jsx';
import {useState, createContext} from 'react';

export const UserContext = createContext()

function MyComponent(){
    	
    const [user, setUser] = useState("Batman");
    return(<div className='box'>

       <h1>ComponentA</h1>
       <h2>{`Hello ${user }`}</h2>

        <UserContext.Provider value = {user}>
            <MyComponent1></MyComponent1>   
        </UserContext.Provider>
          
    </div>)
}

export default MyComponent 