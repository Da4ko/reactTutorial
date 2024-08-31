import {useState, useEffect, useRef} from 'react';

function MyComponent(){

   const inputRef = useRef(null);
   const inputRef1 = useRef(null);
   const inputRef2 = useRef(null);

   useEffect(() => {
      console.log('component rendered');
   })

   function handleClick() {
       inputRef.current.focus();
       inputRef.current.style.backgroundColor = 'yellow';
       inputRef1.current.style.backgroundColor = '';
       inputRef2.current.style.backgroundColor = '';
   }
   function handleClick1() {
      inputRef1.current.focus();
      inputRef.current.style.backgroundColor = '';
      inputRef1.current.style.backgroundColor = 'yellow';
      inputRef2.current.style.backgroundColor = '';


  }
  function handleClick2() {
   inputRef2.current.focus();
   inputRef.current.style.backgroundColor = '';
   inputRef1.current.style.backgroundColor = '';
   inputRef2.current.style.backgroundColor = 'yellow  ';


}
    	
   return(<div>
             
      <button onClick={handleClick}>
         Click me1
      </button>

      <input ref={inputRef} />

      <button onClick={handleClick1}>
         Click me2
      </button>

      <input ref={inputRef1} />

      <button onClick={handleClick2}>
         Click me3
      </button>

      <input ref={inputRef2} />

   </div>)
     
}

export default MyComponent 