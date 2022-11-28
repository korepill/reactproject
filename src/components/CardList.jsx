import React from 'react'; 
import CardItem from '../components/CardItem';



const CardList = ({cards,error}) =>
{
    const Click = false;
    return (
        <div style={{width: '1169px', height: '671px', display: 'flex', justifyContent: 'space-between', margin: '0 auto'}}>
            {cards.map(card =>
                <CardItem onClick = {()=> error(!Click)} card = {card} key={card.id}/>
            )}
        </div>
    )
}

export default CardList