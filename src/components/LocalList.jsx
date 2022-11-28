import React from "react";
import LocationCard from "./LocationCard";

const LocalList = ({locals,AddFavoriteLocal}) => 
{
    return(
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '0 auto'}}>
            {locals.map(local =>
                <LocationCard AddFavoriteLocal={AddFavoriteLocal} local={local} key={local.id}/>)}
        </div>
    ) 
}

export default LocalList;