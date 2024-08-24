import List from "./List.jsx"
function App() {

  const fruits = [{id: 1, name:"apple", calories:95},
    {id: 2, name:"banana", calories:45}, 
    {id: 3, name:"coconut", calories:105},
    {id: 4, name:"pineapple", calories:156},
    {id: 5, name:"orange", calories:34}];

    const vegetables = [{id: 6, name:"tomato", calories:38},
      {id: 7, name:"cucumber", calories:12}, 
      {id: 8, name:"pepper", calories:75},
      {id: 9, name:"eggplant", calories:87},
      {id: 10, name:"onion", calories:49}];


 return (
  <>
  {fruits.length > 0 ? <List items = {fruits} category="Fruits"/> : null}
  {vegetables.length > 0 ? <List items = {vegetables} category="Vegetables"/> : null}
  </>
 )
}

export default App
