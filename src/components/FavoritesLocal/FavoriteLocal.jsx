import React, {useState} from "react";
import '../../style/locations.css'
import '../../style/personcard.css'
import Cross from '../../assets/vectors/cross.png'
import '../../style/favorites.css'


const FavoriteLocal = ({removeFavoriteLocal,flocal}) => 
{
    return(
        <div className="LocalCard">  
            <h1 style={{margin: '11px 0px 9px 170px', alignItems:'center'}}>{flocal.name}</h1>
            <div style={{display:'flex'}}>
                <div style={{width: '227px',marginLeft:'30px'}}>
                    <p id="LocationDescription">Тип:</p>
                    <p id="LocationDescription1">{flocal.type}</p>
                    <p id="LocationDescription">Измерение:</p>
                    <p id="LocationDescription1">{flocal.measurement}</p>
                </div>
                <div style={{width: '283px'}}>
                    <p style={{marginBottom:'11px'}}id="LocationDescription">Количество персонажей, которые в последний раз были замечены здесь:</p>
                    <h1 style={{margin:'0px'}}>{flocal.count}</h1>
                </div>
            </div>
                <div onClick={()=>removeFavoriteLocal(flocal)}className="DelIcon">
                    <div className="Icon1"></div>
                    <img className="Plus" src={Cross} alt="" />
                </div>
        </div>
    )
}

export default FavoriteLocal;