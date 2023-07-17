const Character = (props) => {
    return(
        <div id="CharacterCard">
            <img id="charImg" src={props.character.image}/>
            <h3>{props.character.name}</h3>
            <h6>{props.character.species} - {props.character.gender}</h6>
            <h6>Status: {props.character.status}</h6>
            <h6>Location: {props.character.location.name}</h6>
        </div>
    )
}

export  default Character