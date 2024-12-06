
const niveau ={
    1 :"peu",
    2 :"moyen",
    3 :"beaucoup",
}
   

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={() => alert(`cette plante requiert ${niveau[scaleValue]} ${careType === 'light' ? "de lumiere" : "d'eau"}`) }>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale 