import {useState} from 'react';

function MyComponent() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear()); // use []
    const [carMake, setCarMake] = useState(""); // use []
    const [carModel, setCarModel] = useState(""); // use []

    function handleAddCar() {
        const newCar = {year: carYear, make: carMake, model: carModel};

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("" )
    }

    function handleRemoveCar(index) {
        setCars(cars => cars.filter((element, i ) => i ==! index))
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <div>    
            <h2>List of car Objects</h2>
            <ul>
               {cars.map((car, index) => 
               <li key={index}>
                    {car.year} {car.model} {car.make} 
                    
                    <button onClick={() => handleRemoveCar(index)}> Delete</button>
               </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange} /><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car make' /> <br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter car model' /> <br />
            <button onClick={handleAddCar}>Add car</button>
        </div>
    )
}

export default MyComponent;
