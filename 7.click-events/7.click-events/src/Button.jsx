function Button () {

/*let count = 0;

const handleClick = (name) => {
    if(count <3) {
       count ++;
       console.log(`${name} you clicked ${count} times`); 
    }else{
        console.log(`${name}stop clicking me !`)
    }
};*/
//----------------------------------------------------------------
//const handleClick2 = (name) => console.log(`${name} stop clicking`);
//----------------------------------------------------------------
const handleClick = (e) => e.target.textContent = "CLICKED";
return(<button onDoubleClick={(e) => handleClick(e)}>Click me </button>)
}

export default Button 