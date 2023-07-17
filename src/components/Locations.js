const Location = (props) => {
    return(
        <div id="locationCard">
            <h2>{props.location.name}</h2>
            <h3>Type: {props.location.type}</h3>
            <h3>Dimension: {props.location.dimension}</h3>
        </div>
    )
}

export  default Location