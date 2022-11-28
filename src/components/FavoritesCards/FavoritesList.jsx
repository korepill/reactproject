import React from "react";
import FavoritesCard from "./FavoritesCard";

const FavoritesList = ({favorites,remove}) => 
{
    return(
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '0 auto'}}>
            {favorites.map(favorite =>
                <FavoritesCard remove={remove} favorite = {favorite} key={favorite.id}/>
            )}
        </div>
    )
}

export default FavoritesList;