import React, {useState} from "react";
import '../style/locations.css'
import '../style/personcard.css'
import Plus from '../assets/vectors/plus.png'
import Added from '../assets/vectors/Added.png'
import { useContext } from "react";
import { AuthContext } from "../context";


const LocationCard = ({local,AddFavoriteLocal}) => 
{
    const {isAuth} = useContext(AuthContext)
    const [added,setAdded] = useState(true)
    const ThisLocal = () =>
    {
        const NewPost = {
            ...local
        }
        AddFavoriteLocal(NewPost)
        setAdded(false)
    }
    return(
        <div className="LocalCard">  
            <h1 style={{margin: '11px 0px 9px 170px', alignItems:'center'}}>{local.name}</h1>
            <div style={{display:'flex'}}>
                <div style={{width: '227px',marginLeft:'30px'}}>
                    <p id="LocationDescription">Тип:</p>
                    <p id="LocationDescription1">{local.type}</p>
                    <p id="LocationDescription">Измерение:</p>
                    <p id="LocationDescription1">{local.measurement}</p>
                </div>
                <div style={{width: '283px'}}>
                    <p style={{marginBottom:'11px'}}id="LocationDescription">Количество персонажей, которые в последний раз были замечены здесь:</p>
                    <h1 style={{margin:'0px'}}>{local.count}</h1>
                </div>
            </div>
            {
                added
                ?
                <div onClick={() => ThisLocal()} className="AddIcon">
                    <div className="Icon"></div>
                    <img className="Plus" src={Plus} alt="" />
                </div>
                :
                <img className='AddedIcon' src={Added} alt="" />
            }
        </div>
    )
}

export default LocationCard