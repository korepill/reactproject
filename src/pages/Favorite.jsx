import React from "react";
import Characters from '../assets/Favorite/Characters.png'
import Episodes from '../assets/Favorite/Episodes.png'
import Locations from '../assets/Favorite/Locations.png'
import CharactersActive from '../assets/Favorite/CharactersActive.png'
import EpisodesActive from '../assets/Favorite/EpisodesActive.png'
import LocationsActive from '../assets/Favorite/LocationsActive.png'
import { Link } from "react-router-dom";
import arrow from '../assets/vectors/back.png'
import '../style/favorites.css'
import { useState } from "react";
import FavoritesList from "../components/FavoritesCards/FavoritesList";
import FavoritesLocalList from '../components/FavoritesLocal/FavoritesLocalList'

const Favorite = ({favorites,remove,ChangeBack,flocals,removeFavoriteLocal}) => 
{
    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isPage,setIsPage] = useState(2)

    const activeTab = (index) => 
    {
        setIsPage(index)
    }
    const SortName = () => 
    {
        setIsActive3(false)
        setIsActive1(true)
        setIsActive2(false)
    }
    const SortBornPlace = () => 
    {
        setIsActive3(false)
        setIsActive1(false)
        setIsActive2(true)
    }
    const SortLastLocation = () => 
    {
        setIsActive3(true)
        setIsActive1(false)
        setIsActive2(false)
    }
    return(
        <div style={{width: '1170px', margin: '0 auto'}}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '35px'}}>
                <div style = {{display: 'flex', marginRight: '420px'}}>
                    <img src={arrow} style={{marginRight: '19.5px'}} alt=""/>
                    <Link to='/MainPage' onClick={() => ChangeBack()} className="AboutBack">Назад</Link>
                </div>
                <h2>Избранное</h2>
            </div>
            <div style = {{display: 'flex', justifyContent: 'space-between',alignItems:'center',marginBottom:'38px'}}>
                <div onClick={()=> activeTab(1)} >
                {
                        isPage===1
                        ?
                        <div className = "BigButton">
                            <img className="FavoritesImage" src={LocationsActive} alt="" />
                            <div className="FavoritesText">
                                <h2 className='InsideButtons'>Локации</h2>
                            </div>
                        </div>
                        
                        :
                        <div className="SmallButton">
                            <img className="FavoritesImage" src={Locations} alt="" />
                            <div className="FavoritesText">
                                <h2 className='InsideButtons'>Локации</h2>
                            </div>
                        </div>
                    }
                </div>
                <div onClick={()=> activeTab(2)}>
                    {
                        isPage===2
                        ?
                        <div className = "BigButton">
                            <img className="FavoritesImage" src={CharactersActive} alt="" />
                            <div className="FavoritesText">
                                <h2 className='InsideButtons'>Персонажи</h2>
                            </div>
                        </div>
                        
                        :
                        <div className="SmallButton">
                            <img className="FavoritesImage" src={Characters} alt="" />
                            <div className="FavoritesText">
                                <h2 className='InsideButtons'>Персонажи</h2>
                            </div>
                        </div>
                    }
                </div>
                <div onClick={()=> activeTab(3)}>
                {
                        isPage===3
                        ?
                        <div className = "BigButton">
                            <img className="FavoritesImage" src={EpisodesActive} alt="" />
                            <div className="FavoritesText">
                                <h2 className='InsideButtons'>"Эпизоды"</h2>
                            </div>
                        </div>
                        
                        :
                        <div className="SmallButton">
                            <img className="FavoritesImage" src={Episodes} alt="" />
                            <div className="FavoritesText">
                                <h2 className='InsideButtons'>Эпизоды</h2>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className={`CharacterTab ${(isPage === 1) ? 'active' : ''}`}>
                {(flocals.length === 0)
                    ?
                    <h1 className="NoLocations">У вас пока нет избранных локаций</h1>
                    :
                    <FavoritesLocalList removeFavoriteLocal={removeFavoriteLocal}flocals={flocals}/>
                }
            </div>
            <div className={`CharacterTab ${(isPage === 2) ? 'active' : ''}`}>
                <div style={{width: '648px',display:'flex',justifyContent: 'space-between',marginBottom:'35px'}}>
                    <div style={{fontStyle: 'normal',fontWeight: '700',fontSize: '14px',lineHeight: '17px',fontFamily: 'Montserrat',color: '#000000'}}>Сортировать:</div>
                    <p onClick={()=> SortName()} className={`SortList ${isActive1 ? 'active' : ''}`}>По имени</p>
                    <p onClick={()=> SortBornPlace()} className={`SortList ${isActive2 ? 'active' : ''}`}>По месту происхождения</p>
                    <p onClick={()=> SortLastLocation()} className={`SortList ${isActive3 ? 'active' : ''}`}>По последней локации</p>
                </div>
                {(favorites.length === 0)
                ?
                <h1 className="NoLocations">У вас пока нет избранных персонажей</h1>
                :
                <FavoritesList remove={remove} className="CharacterList" favorites={favorites}/>
                }
            </div>
            <div className={`CharacterTab ${(isPage === 3) ? 'active' : ''}`}>
                <h1 className="NoLocations">У вас пока нет избранных эпизодов</h1>
            </div>
        </div>
    )
}

export default Favorite;