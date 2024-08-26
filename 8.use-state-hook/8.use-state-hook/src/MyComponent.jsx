import {useState} from  'react';

 function MyComponent (){

    const [name, setName] = useState("DEFAULT");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
         
       setName("Batman");
    };

    const incrementAge = () => {
       setAge(age+1)
     };

     const changeEmployedStatus = () => {
        isEmployed ? setIsEmployed(false) : setIsEmployed(true); 
      };

    return(<div>
         <p>Name: {name}</p>
         <button onClick={updateName}>Set name</button>

         <p>Age: {age}</p>
         <button onClick={incrementAge}>Get older</button>

         <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
         <button onClick={changeEmployedStatus}>Change status</button>

    </div>)
}

export default MyComponent