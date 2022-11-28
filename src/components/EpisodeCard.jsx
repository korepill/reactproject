import React from "react";
import Plus from '../assets/vectors/plus.png'

const EpisodeCard = (props) =>
{
    return(
        <div className="EpisodCard">
            <div style={{display:'flex',justifyContent: 'space-between',width:'1112px',margin:'15px 29px 5px 29px'}}>
                <h1>{props.episode.name}</h1>
                <div className="AddFavoritePost">
                    <img style={{margin:'0 12px 0 11px'}}src={Plus} alt="" />
                    <div style={{color: 'white',fontSize: '15px'}}>Добавить в избранное</div>
                </div>
            </div>
            <div>
                <div style={{display:'flex'}}>
                    <div style={{width: '268px',marginLeft:'30px'}}>
                        <p id="EpisodDescription">Эпизод:</p>
                        <p id="EpisodDescription1">{props.episode.number}</p>
                        <p id="EpisodDescription">Дата выхода:</p>
                        <p id="EpisodDescription1">{props.episode.date}</p>
                    </div>
                    <div style={{width:'842px'}}>
                        <p style={{marginBottom:'11px'}} id="EpisodDescription">Персонажи, учавствующие в эпизоде::</p>
                        <p id='EpisodDescription1'>{props.episode.persons}</p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default EpisodeCard;