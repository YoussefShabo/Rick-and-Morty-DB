const Episode = (props) => {
    return(
        <div id="locationCard">
            <h2>{props.episode.name}</h2>
            <h6>{props.episode.episode}</h6>


        </div>
    )
}

export  default Episode