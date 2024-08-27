import {useState} from 'react';

function MyComponent () {

    const [foods, setFoods] = useState(["Apples", "Orange", "Pepper"]);

    function handleAddFood() {
        const newFood = document.getElementById('food-input').value;
        document.getElementById('food-input').value = "";

        setFoods(f =>[...f, newFood]);

    }
    function handleRemoveFood(index) {
            setFoods(foods.filter((_, i) => i!==index))
    }
return(<>
    <div>
        <h2>List of food</h2>
        <ul>{foods.map((f, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{f}</li>)}</ul>

        <input type="text" id="food-input" placeholder='enter food name'/>
        <button onClick={handleAddFood}>Add food</button>

       
    </div>
</>);

};

export default MyComponent; 