import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import arrow from '../assets/vectors/back.png'
import EpisodeList from "../components/EpisodeList";
import '../style/episod.css'
const Episodes = () => 
{
    const [episodes] = useState(
        [
            {id:'1',name:'Pilot',date:'December 2,2013',number:'S01E01',persons:"Rick Sanchez,Morty Smith, Bepisian, Beth Smith, Canklanker Thom, Davin, Frank Palicky, Glenn, Hookah Alien, Jerry Smith, Jessica, Jessica's Friend, Mr. Goldenfold, Mrs. Sanchez, Principal Vagina, Summer Smith и др."},
            {id:'2',name:'Lawnmower Dog',date:'December 2,2013',number:'S01E02',persons:"Rick Sanchez,Morty Smith, Bepisian, Beth Smith, Canklanker Thom, Davin, Frank Palicky, Glenn, Hookah Alien, Jerry Smith, Jessica, Jessica's Friend и др."},
            {id:'3',name:'Anatomy Park',date:'December 2,2013',number:'S01E03',persons:"Rick Sanchez,Morty Smith, Bepisian, Beth Smith, Canklanker Thom, Davin, Frank Palicky, Jerry Smith, Jessica, Jessica's Friend, Mr. Goldenfold, Mrs. Sanchez, Principal Vagina, Summer Smith и др."},
            {id:'4',name:'M. Night Shaym-Aliens!',date:'December 10,2013',number:'S01E04',persons:"Rick Sanchez,Morty Smith, Frank Palicky, Glenn, Hookah Alien, Jerry Smith, Jessica, Jessica's Friend, Mr. Goldenfold, Mrs. Sanchez, Principal Vagina, Summer Smith и др."},
        ]
    )
    console.log(episodes)
    return(
        <div>
            <div style={{width: '1170px', margin: '0 auto'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '70px'}}>
                    <div style = {{display: 'flex', marginRight: '420px'}}>
                        <img src={arrow} style={{marginRight: '19.5px'}} alt=""/>
                        <Link to='/MainPage' className="AboutBack">Назад</Link>
                    </div>
                    <h2>Эпизоды</h2>
                </div>
                <div style={{display:'flex', justifyContent: 'space-between',marginBottom:'30px'}}>
                    <div style={{width:'970px',display:'flex', justifyContent: 'space-between', marginRight: '137px'}}>
                        <div style={{marginRight: '30px'}}>
                            <div style={{marginBottom: '20px'}}>Поиск по названию</div>
                            <input style= {{paddingLeft: '13px', width: '370px',height: '36px',background: 'rgba(162, 162, 162, 0.1)',border: '1px solid rgba(162, 162, 162, 0.6)',borderRadius: '5px'}} type="text" placeholder="Введите имя персонажа"/>
                        </div>
                        <div style={{marginRight: '30px'}}>
                            <div style={{marginBottom: '20px'}}>Поиск по расе</div>
                            <input style= {{paddingLeft: '13px', width: '270px',height: '36px',background: 'rgba(162, 162, 162, 0.1)',border: '1px solid rgba(162, 162, 162, 0.6)',borderRadius: '5px'}} type="text" placeholder="Введите имя персонажа"/>
                        </div>
                        <div>
                            <div style={{marginBottom: '20px'}}>Поиск по статусу</div>
                            <input style= {{paddingLeft: '13px',width: '270px',height: '36px',background: 'rgba(162, 162, 162, 0.1)',border: '1px solid rgba(162, 162, 162, 0.6)',borderRadius: '5px'}} type="text" placeholder="Введите имя персонажа"/>
                        </div>
                    </div>
                </div>
                <EpisodeList episodes = {episodes}/>
            </div>
        </div>
    )
}

export default Episodes;