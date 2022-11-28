import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from '../assets/vectors/back.png'
import line from '../assets/vectors/line.png'
import lineRed from '../assets/vectors/lineRed.png'
import square from '../assets/vectors/square.png'
import squareRed from '../assets/vectors/squareRed.png'
import '../style/characters.css'
import CharactersList from "../components/CharactersList";
import CharactersList1 from "../components/CharacterList1";


const Characters = ({ChangeBack,AddFavoritePosts}) => 
{
    const [sort,setSort] = useState(true)
    const [heros] = useState([
        {id:'1',gender:'Male',episodes:'1-41',pointer: require('../assets/vectors/Alive.png'),image:require('../assets/CharacterList/Rick.png'), name:'Rick Sanchez',state:'Живой', race:'Human',origin:'Earth (C-137)',lastlocashion: 'Earth (Replacement Dimension)'},
        {id:'2',gender:'Male',episodes:'1-41',pointer: require('../assets/vectors/Alive.png'),image:require('../assets/CharacterList/Jerry.png'), name:'Jerry Smith',state:'Живой', race:'Human',origin:'Earth (C-137)',lastlocashion: 'Earth (Replacement Dimension)'},
        {id:'3',gender:'Male',episodes:'1-41',pointer: require('../assets/vectors/Dead.png'),image:require('../assets/CharacterList/Beth.png'), name:'Beth Smith',state:'Мертв', race:'Human',origin:'Earth (C-137)',lastlocashion: 'Earth (Replacement Dimension)'},
        {id:'4',gender:'Male',episodes:'1-41',pointer: require('../assets/vectors/NoFound.png'),image:require('../assets/CharacterList/Abadango.png'), name:'Abadango Cluster Princess',state:'Неизвестно', race:'Alien',origin:'Abadango',lastlocashion: 'Abadango'},
    ])
    return (
        <div style={{display: 'block'}}>
           <div style={{width: '1170px', height: '112px', margin: '0 auto'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '70px'}}>
                    <div style = {{display: 'flex', marginRight: '420px'}}>
                        <img src={arrow} style={{marginRight: '19.5px'}} alt=""/>
                        <Link to='/MainPage' onClick={() => ChangeBack()} className="AboutBack">Назад</Link>
                    </div>
                    <h2>Персонажи</h2>
                </div>
                <div style={{display:'flex', justifyContent: 'space-between',marginBottom:'30px'}}>
                    <div style={{width:'970px',display:'flex', justifyContent: 'space-between', marginRight: '137px'}}>
                        <div style={{marginRight: '30px'}}>
                            <div style={{marginBottom: '20px'}}>Поиск по имени</div>
                            <input style= {{paddingLeft: '13px', width: '370px',height: '36px',background: 'rgba(162, 162, 162, 0.1)',border: '1px solid rgba(162, 162, 162, 0.6)',borderRadius: '5px'}} type="text" placeholder="Введите имя персонажа"/>
                        </div>
                        <div style={{marginRight: '30px'}}>
                            <div style={{marginBottom: '20px'}}>Поиск по расе</div>
                            <input style= {{paddingLeft: '13px', width: '270px',height: '36px',background: 'rgba(162, 162, 162, 0.1)',border: '1px solid rgba(162, 162, 162, 0.6)',borderRadius: '5px'}} type="text" placeholder="Введите расу персонажа"/>
                        </div>
                        <div>
                            <div style={{marginBottom: '20px'}}>Поиск по статусу</div>
                            <input style= {{paddingLeft: '13px',width: '270px',height: '36px',background: 'rgba(162, 162, 162, 0.1)',border: '1px solid rgba(162, 162, 162, 0.6)',borderRadius: '5px'}} type="text" placeholder="Введите статус персонажа"/>
                        </div>
                    </div>
                    <div>
                        <div style={{marginBottom: '22px'}}>Вид</div>
                        {sort
                        ?
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img src={line} onClick={ () => setSort(false) } alt="" style={{marginRight: '15px',cursor:'pointer'}}/>
                            <img src={squareRed}  style={{cursor:'pointer'}} alt="" />
                    
                        </div>
                        :
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <img src={lineRed} alt="" id='RedPoints' style={{marginRight: '15px', cursor:'pointer'}}/>
                            <img src={square} style={{cursor:'pointer'}} onClick={ () => setSort(true)} alt="" />
                        </div>
                        }
                    </div>
                </div>
                <div>
                    {
                        sort
                        ?
                        <CharactersList heros={heros} AddFavoritePosts={AddFavoritePosts}/>
                        :
                        <CharactersList1 heros={heros} AddFavoritePosts={AddFavoritePosts}/>
                    }
                    
                </div>
            </div>
        </div>
    ) 
}

export default Characters;