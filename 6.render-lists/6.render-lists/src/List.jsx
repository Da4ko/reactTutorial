import PropTypes from "prop-types";
function List(props){

    const itemList = props.items;
    const category= props.category;
   //SORTING-------------------------------------------------------------------------------------------------------------//                    
   // fruits.sort((a, b) => a.name.localeCompare(b.name) );  // alphabetical

   // fruits.sort((a, b) => b.name.localeCompare(a.name) );  // reverse alphabetical

   // fruits.sort((a, b) => a.calories - b.calories ); // Numeric

   // fruits.sort((a, b) => b.calories - a.calories ); // reverse Numeric      
              
   //FILTER-------------------------------------------------------------------------------------------------------------//         
   // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // filtering and creating list that contains only fruits below 100 calories

   //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100); // filtering and creating list that contains only fruits above 100 calories

    const listItems = itemList.map( i => <li key={i.id}>{i.name} &nbsp; <b>{i.calories}</b></li>);

    return(
    <>

        <h3 className = "list-category">{category}</h3>
        <ol className = "list-items">{listItems}</ol>

    </>
    )
}
List.propTypes={
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number,})),
    category: PropTypes.string,
}
List.defaultProps ={
    items: [],
    category: "undefined",
}
export default List