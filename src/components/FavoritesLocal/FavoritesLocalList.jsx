import React from "react";
import FavoritesLocal from "./FavoriteLocal";

const FavoriteLocalList = ({flocals,removeFavoriteLocal}) => 
{
    return(
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '0 auto'}}>
            {flocals.map(flocal =>
                <FavoritesLocal removeFavoriteLocal={removeFavoriteLocal} flocal={flocal} key={flocal.id}/>)}
        </div>
    ) 
}

export default FavoriteLocalList;