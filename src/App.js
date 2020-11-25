import React from 'react'
import ReactDOM from 'react-dom'
import FilteredList from './FilteredList';

function App() {

  const productList = [
    { name: "Rat", element: "Water", alignment: "Yang"},
    { name: "Ox", element: "Earth", alignment: "Yin"},
    { name: "Tiger", element: "Wood", alignment: "Yang"},
    { name: "Rabbit", element: "Wood", alignment: "Yin"},
    { name: "Dragon", element: "Earth", alignment: "Yang"},
    { name: "Serpent", element: "Fire", alignment: "Yin"},
    { name: "Horse", element: "Fire", alignment: "Yang"},
    { name: "Sheep", element: "Earth", alignment: "Yin"},
    { name: "Monkey", element: "Metal", alignment: "Yang"},
    { name: "Rooster", element: "Metal", alignment: "Yin"},
    { name: "Dog", element: "Earth", alignment: "Yang"},
    { name: "Pig", element: "Water", alignment: "Yin"},
  ]

  return (  
    <div className="App">
      <div>
        <FilteredList list={productList} />
	    </div>
    </div>
  );
}

export default App;
