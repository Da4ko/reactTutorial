import Student from "./Student.jsx"

function App() {
  return(
    <>
    <Student name= "Batman" age={30} isStudent={false}/>
    <Student name= "Robbin" age={20} isStudent={true}/>
    <Student name= "Superman" age={44} isStudent={false}/>
    <Student name= "Superman helper" age={22} isStudent={true}/>
    <Student></Student> 
    </>
  )
}

export default App
