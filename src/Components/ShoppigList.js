import plantList  from '../data/PlantList.js'
import "../Styles/ShoppingList.css"
import CareScale from './CareScale.js'
import PlantItem from './PlantItem.js'

function Shoppinglist(){
    const category = plantList.reduce((acc , plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),[] 
    )

    return(<div>
        <ul>
            {category.map((cat) =>( 
                <li key={cat}> {cat} </li>
            ))}
        </ul>
        <ul className="lmj-plant-list">
            {plantList.map((plant) => (
                <PlantItem id={plant.id} cover={plant.cover} name={plant.name} water={plant.water} light={plant.light}/>

            ))}

        </ul>
    </div>)
}

export default Shoppinglist ;