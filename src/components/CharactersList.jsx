import React from "react";
import CharacterCard from "./CharacterCard";

const CharactersList = ({heros,AddFavoritePosts}) => 
{
    return(
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '0 auto'}}>
            {heros.map(hero =>
                <CharacterCard AddFavoritePosts={AddFavoritePosts} hero = {hero} key={hero.id}/>
            )}
        </div>
    )
}

export default CharactersList;