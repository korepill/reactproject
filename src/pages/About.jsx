import React from "react";
import { Link } from "react-router-dom";
import arrow from '../assets/vectors/back.png'
import '../style/about.css'

const About = ({ChangeBack}) =>
{
    return (
        <div style={{width: '1170px', height: '112px', margin: '0 auto'}}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '70px'}}>
                <div style = {{display: 'flex', marginRight: '420px'}}>
                    <img src={arrow} style={{marginRight: '19.5px'}} alt=""/>
                    <Link to='/MainPage' onClick={() => ChangeBack()} className="AboutBack">Назад</Link>
                </div>
                <h2>О проекте</h2>
            </div>
            <p style={{textIndent:'5em',fontFamily: 'Montserrat',fontStyle: 'normal',fontWeight: '400',fontSize: '24px',lineHeight: '29px',textAlign: 'center'}}>
                Данный проект создан по мотивам приключений Рика и Морти. Здесь вы можете поближе познакомиться со всеми персонажами, эпизодами и локациями данного мультсериала.
            </p>
            <p style={{textIndent:'5em',fontFamily: 'Montserrat',fontStyle: 'normal',fontWeight: '400',fontSize: '24px',lineHeight: '29px',textAlign: 'center'}}>
                Проект является тестовым заданием для входящих кандидатов пула Frontend. В зависимости от грейда кандидата необходимо выполнить соответствующий список заданий. Желаем удачи!
            </p>
        </div>
    )
}

export default About;