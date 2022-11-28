import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from '../assets/vectors/back.png'
import LocalList from "../components/LocalList";
import '../style/locations.css'

const Location = ({AddFavoriteLocal}) => 
{
    const [locals] = useState([
        {id:'1',type:'Planet',measurement:'Dimension C-137',count:'27',name:'Earth (C-137)'},
        {id:'2',type:'Space station',measurement:'Unknown',count:'91',name:'Abadango'},
        {id:'3',type:'Cluster',measurement:'Unknown',count:'3',name:'Citadel of Ricks'},
        {id:'4',type:'Planet',measurement:'Unknown',count:'15',name:'Anatomy Park'},
    ])
    return(
        <div>
            <div style={{width: '1170px', height: '112px', margin: '0 auto'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '70px'}}>
                    <div style = {{display: 'flex', marginRight: '420px'}}>
                        <img src={arrow} style={{marginRight: '19.5px'}} alt=""/>
                        <Link to='/MainPage' className="AboutBack">Назад</Link>
                    </div>
                    <h2>Локации</h2>
                </div>
                <div style={{display:'flex', justifyContent: 'space-between',marginBottom:'30px'}}>
                    <div style={{width:'1170px',display:'flex', justifyContent: 'space-between'}}>
                        <div style={{marginRight: '30px'}}>
                            <div style={{marginBottom: '20px'}}>Поиск по названию</div>
                            <input className="LocationSort" type="text" placeholder="Введите имя персонажа"/>
                        </div>
                        <div style={{marginRight: '30px'}}>
                            <div style={{marginBottom: '20px'}}>Поиск по типу</div>
                            <input className="LocationSort" type="text" placeholder="Введите имя персонажа"/>
                        </div>
                        <div>
                            <div style={{marginBottom: '20px'}}>Поиск по измерению</div>
                            <input className="LocationSort" type="text" placeholder="Введите имя персонажа"/>
                        </div>
                    </div>
                </div>
                <div>
                    <LocalList AddFavoriteLocal={AddFavoriteLocal} locals={locals}/>
                </div>
                
            </div>
        </div>
    )
}

export default Location;