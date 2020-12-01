# README
## Architecture of Chinese Zodiac Race Team
The architecture of my application is based off of the suggested architecture on the Gear Up Slides. 

### Organization of Components
My two main components are my FilteredList and DisplayList. My FilteredList handles the majority of the functinality of my app, being in charge of filtering and sorting. DisplayList handles what is displayed
on each item card, and handles the aggregator functionality of my app. It also takes in the productList 
as a prop, but only displays what has been filtered through FilteredList. 


### How Data is Passed Down Through Components
Data is passed down through components via props. This way components are able to access data 
from the object super() to them. For example, my initial productList is passed into both FilteredList 
and DisplayList as a prop.


### How User Interactions Trigger Changes in State
A user’s selection of an option in any of the filters changes the state of the filter, thereby changing the display of the items on my app. The Element and Alignment filters are both initially set to the state “”, which displays all the items. A user changing either of the filters to a specific option like “Water” or “Yin” will change the state to a selected Element or Alignment, and display on the app only those items. The Race Order sort is set to the state “true,” and when “Reverse Order” is selected, the state is changed to “false” and the items are reordered. 

A user’s decision to click on the Add/Remove button on an item changes the item’s state of either being Ignored or not Ignored by the Aggregator. In other words, if an item is ignored, its legs will not be counted when adding to the aggregated number of legs. Whereas if an item’s state is set to not Ignored, then an animal’s number of legs will be counted in the aggregate number of total legs, and its name will be included in the list of selected animals. 
