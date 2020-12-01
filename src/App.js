import React, {useState} from 'react'
import FilteredList from './FilteredList';
import DisplayList from './DisplayList';
import './App.css';

import Dog from './images/Dog.svg'
import Dragon from './images/Dragon.svg'
import Goat from './images/Goat.svg'
import Horse from './images/Horse.svg'
import Monkey from './images/Monkey.svg'
import Ox from './images/Ox.svg'
import Pig from './images/Pig.svg'
import Rabbit from './images/Rabbit.svg'
import Rat from './images/Rat.svg'
import Rooster from './images/Rooster.svg'
import Serpent from './images/Serpent.svg'
import Tiger from './images/Tiger.svg'

function App() {
  
  // List of all the Chinese Zodiac animals and their properties
  const productList = [
    { name: "Rat", element: "Water", alignment: "Yang", numLegs: 4, raceIndex: 1, svg: Rat},
    { name: "Ox", element: "Earth", alignment: "Yin", numLegs: 4, raceIndex: 2, svg: Ox},
    { name: "Tiger", element: "Wood", alignment: "Yang", numLegs: 4, raceIndex: 3, svg: Tiger},
    { name: "Rabbit", element: "Wood", alignment: "Yin", numLegs: 4, raceIndex: 4, svg: Rabbit},
    { name: "Dragon", element: "Earth", alignment: "Yang", numLegs: 4, raceIndex: 5, svg: Dragon},
    { name: "Serpent", element: "Fire", alignment: "Yin", numLegs: 0, raceIndex: 6, svg: Serpent},
    { name: "Horse", element: "Fire", alignment: "Yang", numLegs: 4, raceIndex: 7, svg: Horse},
    { name: "Goat", element: "Earth", alignment: "Yin", numLegs: 4, raceIndex: 8, svg: Goat},
    { name: "Monkey", element: "Metal", alignment: "Yang", numLegs: 2, raceIndex: 9, svg: Monkey},
    { name: "Rooster", element: "Metal", alignment: "Yin", numLegs: 2, raceIndex: 10, svg: Rooster},
    { name: "Dog", element: "Earth", alignment: "Yang", numLegs: 4, raceIndex: 11, svg: Dog},
    { name: "Pig", element: "Water", alignment: "Yin", numLegs: 4, raceIndex: 12, svg: Pig},
  ]

  // Initial state of the displayed list is the original list of products (aka Zodiac animals)
  const [displayList, setDisplayList] = useState(productList);

  return (  
    <div className="App">
      <div>
        <FilteredList list={productList} setDisplayList={setDisplayList} />
        <DisplayList list={displayList}/>
	    </div>
    </div>
  );
}

export default App;