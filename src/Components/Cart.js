import "../Styles/Cart.css"
function Cart(){
    const monstPrice = 8
    const lierrePrice = 10
    const fleurPrice = 15
    const total = monstPrice + lierrePrice + fleurPrice
    return(<div className="lmj-cart">
        <h2>Panier</h2>
        <ul>
            <li>monstrera :{monstPrice}$</li>
            <li>lierre :{lierrePrice}$</li>
            <li>bouquet de fleur :{fleurPrice}$</li>
        </ul>

        <p>le total du panier est : {total}$</p>
    </div>)
    
}

export default Cart ;