import React from 'react';
import '../style/carditem.css';
import {useNavigate} from 'react-router-dom'

const CardItem = (props) => {
    const navigate = useNavigate()
    return (
        <div>
            <div onClick={()=> navigate(`/MainPage/${props.card.id}`)}className = "Card__hover" style={{ width: '369.06px' , height: '671px',background: '#FFFFFF', border: '1px solid rgba(162, 162, 162, 0.6)',borderRadius: '19px'}}>
                <div style={{margin: '20px 20px 33px 20px'}}>
                    <img src={props.card.image} alt="cardFoto" style={{width: '330px', height: '494px'}} />
                    <h1 className='Card__name' style={{margin: '18px 0px 18px 0px'}}>{props.card.name}</h1>
                    <div className='Card__description'>{props.card.description}</div>
                </div>
            </div>
        </div>
        
    )
}

export default CardItem;