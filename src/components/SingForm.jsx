import React from "react";
import MyInput from "./ui/input/MyInput";
import '../style/signform.css';
import { AuthContext } from '../context/index';
import { ModalVisible } from '../context/index1';
import {useContext} from 'react';
import { useState } from "react";
// import Rick from '../assets/LogAndSing/Rick.png'
// import GreenRick from '../assets/LogAndSing/GreenRick.png'
// import Morty from '../assets/LogAndSing/Morty.png'
import CloseEasy from '../assets/vectors/CloseEasy.png'
import OpenEasy from '../assets/vectors/OpenEasy.png'


const SingForm = ({UserStor,GetUserName,GetUserLName}) =>
{
    const Click = false;
    const [username,setUserName] = useState('')
    const [userNameCount,setUserNameCount] = useState('')
    const [userlastname,setUserLastName] = useState('')
    const [userLastNameCount,setUserLastNameCount] = useState('')
    const [nameLastError,setLastNameError] = useState(false)
    const {setModal} = useContext(ModalVisible)
    const {setIsAuth} = useContext(AuthContext)
    const [isVisible,setIsVisible] = useState('password')
    const [isVisibleRepet,setIsVisibleRepet] = useState('password')
    const [password,setPassword] = useState('')
    const [repetPassword,setRepetPassword] = useState('')
    const [passwordError,setPasswordError] = useState(false)
    const [passwordRepetError,setPasswordRepetError] = useState(false)
    const [passwordCount,setPasswordCount] = useState('')
    const [,setPasswordRepetCount] = useState('')
    const [nameError,setNameError] = useState(false)
    const [email,setEmail] = useState('')
    const [emailError,setEmailError] = useState(false)
    const [emailCount,setEmailCount] = useState('')
    const [login,setLogin] = useState('')
    const [loginError,setLoginError] = useState(false)
    const [loginCount,setLoginCount] = useState('')
    const VisiblePassword = () => 
    {
        if(isVisible !== 'password')
        {
            setIsVisible('password')
        }
        else
        {
            setIsVisible('text')
        }
    }
    const VisiblePasswordRepet = () =>
    {    
        if(isVisibleRepet !== 'password')
        {
            setIsVisibleRepet('password')
        }
        else
        {
            setIsVisibleRepet('text')
        }
    }
    const GetPassword = (event) =>
    {
        setPassword(event.target.value)
        setPasswordCount(event.target.value.length)
        if(event.target.value.length > 6 )
        {
            setPasswordError(false)
        }
    }
    const GetRepetPassword = (event) => 
    {
        setRepetPassword(event.target.value)
        setPasswordRepetCount(event.target.value.length) 
    }
    const GetName = (event) => 
    {   
        setUserName(event.target.value)
        setUserNameCount(event.target.value.length)
        GetUserName(event.target.value)
        if(event.target.value.length >=2){
            setNameError(false)
        }
    }
    const GetLName = (event) => 
    { 
        setUserLastName(event.target.value)
        setUserLastNameCount(event.target.value.length)
        GetUserLName(event.target.value)
        if(userLastNameCount >= 2){
            setLastNameError(false)
        }
    }
    const GetEmail = (event) =>
    {
        setEmail(event.target.value)
        setEmailCount(event.target.value.length)
        if(event.target.value.length > 7)
        {
            setEmailError(false)
        }
    }
    const GetLogin = (event) =>
    {
        setLogin(event.target.value)
        setLoginCount(event.target.value.length)
        if(event.target.value.length > 6)
        {
            setLoginError(false)
        }
    }
    const Sing = () => 
    {   
        if(repetPassword !== password)
        {
            setPasswordRepetError(true)
            setRepetPassword('')
        }
        else 
        {
            setPasswordRepetError(false)
        }
        if(passwordCount < 6)
        {
            setPasswordError(true)
            setPassword('')
        }
        if(emailCount < 7)
        {
            setEmailError(true)
            setEmail('')
        }
        if(loginCount < 6)
        {
            setLoginError(true)
            setLogin('')
        }
        if(userNameCount >=2 && (repetPassword === password) && userLastNameCount >= 2 && loginCount > 6 && emailCount > 7 && passwordCount > 6)
        {
            setIsAuth(true)
            localStorage.setItem('auth','true')
            setModal(Click) 
            const NewUser = {
                id: Date.now(),
                email: email,
                login: login,
                name: username,
                lname: userlastname,
                password: password,
            }
            UserStor(NewUser)
        }
        if(userNameCount <= 2)
        {
            setNameError(true)
            setUserName('')
        }
        if(userLastNameCount <= 2)
        {
            setLastNameError(true)
            setUserLastName('')
        }
    }
    return (
        <div className="SingContent" onClick={(e) => e.stopPropagation()}>
            <div>
                <div className='Form'>
                    <h1 className="Form__sign">Регистрация</h1>
                    <div style={{position:'relative'}}>
                        <MyInput onChange={event=> GetEmail(event)} value={email} type = 'text' placeholder = 'Введите E-mail'/>
                        <div className={`SingEmail ${emailError ? 'active' : ''}`}>Некорректный email</div>
                    </div>
                    <div style={{position:'relative'}}>
                        <MyInput onChange={event => GetLogin(event)} value={login} type = 'text' placeholder = 'Придумайте логин'/>
                        <div className={`SingLogin ${loginError ? 'active' : ''}`}>Некорректный логин</div>
                    </div>
                    <div style={{position:'relative'}}>
                        <MyInput value={username} onChange={event=> GetName(event)} type = 'text' placeholder = 'Введите имя'/>
                        <div className={`SingName ${nameError ? 'active' : ''}`}>Некорректное имя пользователя</div>
                    </div>
                    <div style={{positon:'relative'}}>
                        <MyInput value={userlastname} onChange={event=> GetLName(event)} type = 'text' placeholder = 'Введите фамилию'/>
                        <div className={`SingLastName ${nameLastError ? 'active' : ''}`}>Некорректная фамилия пользователя</div>
                    </div>
                    <div style={{position:'relative'}}>
                        <img className = {`Open ${(isVisible !== 'password') ? 'active' : ''}`} style={{position:'absolute',right:'10%', top:'18%',cursor:'pointer'}} onClick={() => VisiblePassword()} src={OpenEasy} alt="" />
                        <img className = {`Close ${(isVisible !== 'text')  ? 'active' : ''}`} style={{position:'absolute',right:'10%', top:'15%',cursor:'pointer'}} onClick={() => VisiblePassword()} src={CloseEasy} alt="" />
                        <MyInput value={password} onChange={event => GetPassword(event)}type = {isVisible} placeholder = 'Введите  пароль'/>
                        <div className={`SignPassword ${passwordError  ? 'active' : ''}`}>Некорректный пароль</div>
                    </div>
                    <div style={{position:'relative'}}>
                        <img className = {`Open ${(isVisibleRepet !=='password') ? 'active' : ''}`} style={{position:'absolute',right:'10%', top:'18%',cursor:'pointer'}} onClick={() => VisiblePasswordRepet()} src={OpenEasy} alt="" />
                        <img className = {`Close ${(isVisibleRepet !== 'text')  ? 'active' : ''}`} style={{position:'absolute',right:'10%', top:'15%',cursor:'pointer'}} onClick={() => VisiblePasswordRepet()} src={CloseEasy} alt="" />
                        <MyInput value = {repetPassword} onChange={event => GetRepetPassword(event)} type = {isVisibleRepet} placeholder = 'Повторите  пароль'/>
                        <div className={`RepetPassword ${passwordRepetError  ? 'active' : ''}`}>Пароли не совпадают</div>
                    </div>
                    <button onClick = {() => {Sing()}} className="Sing__button">Зарегестрироваться</button>
                </div>
                {/* <div className='GreenRick' >
                    <img src={GreenRick} alt="" />
                </div>
                <img src={Rick} alt="" />
                <img src={Morty} alt="" /> */}
            </div>
            
        </div>
    )
}

export default SingForm;