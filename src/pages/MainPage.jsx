import React, { useState } from 'react'
import CardList from '../components/CardList'

function MainPage() {
  const [cards] = useState([
    {id: 1, image: require('../assets/CardList/Characters.png'), name: 'Персонажи', description: 'Зайди и познакомься со всеми персонажами вселенной'},
    {id: 2, image: require('../assets/CardList/Locations.png'), name: 'Локации', description: 'Исследуй все локации. Давай же, не будь занудой!'},
    {id: 3, image: require('../assets/CardList/Episodes.png'), name: 'Эпизоды', description: 'Узнай чуть больше о карте приключений Рика и Морти'},
  ])
  return (
  <div className="App">
      <CardList cards={cards}/>
   
  </div>
  );
}

export default MainPage;
