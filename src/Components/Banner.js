import React from 'react'
import logo from '../Assets/logo.png'
import '../Styles/Banner.css'
function Description(){
    return(<p1>
        Ici, vous pouvez acheter toutes les plantes que vous voulez
    </p1>)
}

function Banner(){
    return(
        <div className="lmj-banner">
            <img src={logo} alt='la maison jungle ' className='lmj-logo'/>
           <h1>La maison jungle</h1>
           <Description/>
        </div>)
    
}

export default Banner 