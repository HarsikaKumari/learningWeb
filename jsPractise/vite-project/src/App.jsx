import { useState } from 'react'
import './App.css'

function App() {

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  console.log(city);

  let cities = {
    Delhi: ["New Delhi", "Gokalpuri", "Mandoli", "Deoli"],
    punjab: ["Amritsar", "Patiala", "Ludhiana", "Jalandhar"],
  };

  const handleChange = (e) => {
    setState(() => (e.target.value));
    setCity("");
  }

  const handleCityChange = (e) => {
    setCity(() => (e.target.value));
  }

  let states = cities[state] || [];

  return (
    <div>
      <label>Select State: </label>
      <select name="cities" id="cities" onChange={handleChange}>
        <option value="">Select state</option>
        {
          Object.keys(cities).map((city, index) => {
            return (
              <option key={index} value={city}>
                {city}
              </option>
            );
          })
        }
      </select>

      <label>Select City: </label>
      <select name="states" id="states" onChange={handleCityChange}>
        <option value="">Select City</option>
        {
          states.map((state, index) => {
            return (
              <option key={index} value={state}>
                {state}
              </option>
            );
          })
        }
      </select>
    </div>
  )
}



export default App
