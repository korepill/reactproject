import React from "react";
import CharacterCard1 from "./CharacterCard1";

const CharactersList = ({heros,AddFavoritePosts}) => 
{
    return(
        <div style={{display: 'block', margin: '0 auto',height: '766px'}}>
            {heros.map(hero =>
                <CharacterCard1 AddFavoritePosts={AddFavoritePosts} hero = {hero} key={hero.id}/>
            )}
        </div>
    )
}

export default CharactersList;