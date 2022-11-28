import React from "react";
import EpisodeCard from "./EpisodeCard";

const EpisodeList = ({episodes}) => 
{
    return (
        <div style={{height: '766px'}}>
            {episodes.map(episode =>
                <EpisodeCard episode={episode} key={episode.id}/>)}
        </div>
    ) 
}

export default EpisodeList;