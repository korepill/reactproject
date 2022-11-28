import React,{useState} from "react";
import MyInput from "./ui/input/MyInput";
import '../style/logform.css';
import { AuthContext } from '../context/index';
import { ModalVisible } from '../context/index1';
import {useContext} from 'react';
import CloseEasy from '../assets/vectors/CloseEasy.png'
import OpenEasy from '../assets/vectors/OpenEasy.png'


const LogForm = ({Remail,Rpassword}) => 
{
    const [isActive,setIsActive] = useState(true)
    const {setModal1} = useContext(ModalVisible)
    const {setIsAuth} = useContext(AuthContext)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isVisible,setIsVisible] = useState('password')
    const [emailCount,setEmailCount] = useState('')
    const [passwordCount,setPasswordCount] = useState('')
    const [emailError,setEmailError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)

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
    console.log(Remail)
    const GetEmail = (event) => 
    {   
        setEmail(event.target.value)
        setEmailCount(event.target.value.length)
        if(emailCount > 6)
        {
            setEmailError(false)
        }
    }
    const GetPassword = (event) => 
    { 
        setPassword(event.target.value)
        setPasswordCount(event.target.value.length)
        if(passwordCount > 6)
        {
            setPasswordError(false)
        }
   
    }
    const login = (event) => 
    {
        event.stopPropagation()
        if(Rpassword === password && Remail === email)
        {
            setIsAuth(true)
            localStorage.setItem('auth','true')
            setIsActive(false)
            setModal1(false)
            setEmail('')
            setPassword('')
        }
        if(Remail !== email)
        {
            setEmailError(true)
            setEmail('')
        }
        if(Rpassword !== password)
        {
            setPasswordError(true)
            setPassword('')
        }

    }
    return(
        <div className="LogContent" onClick={(e) => e.stopPropagation()}>
            <h1 className="Form__log">Вход</h1>
            <MyInput value={email} onChange={event => GetEmail(event)}type = 'text' placeholder = 'Введите логин или E-mail'/>
            <div className={`NoEmail ${emailError ? 'active' : ''}`}>Пользователь не зарегестрирован</div>
            <div style={{position:'relative'}}>
                <img className = {`Open ${(isVisible  !== 'password') ? 'active' : ''}`} style={{position:'absolute',right:'10%', top:'18%',cursor:'pointer'}} onClick={() => VisiblePassword()} src={OpenEasy} alt="" />
                <img className = {`Close ${(isVisible  !== 'text')  ? 'active' : ''}`} style={{position:'absolute',right:'10%', top:'15%',cursor:'pointer'}} onClick={() => VisiblePassword()} src={CloseEasy} alt="" />
                <MyInput value={password} onChange={event => GetPassword(event)} type = {isVisible} placeholder = 'Введите  пароль'/>
            </div>
            <div className={`NoPassword ${passwordError ? 'active' : ''}`}>Некорректный пароль</div>
            <div style={{height: '17px', margin: '0px 0px 50px 20px'}}>
                <input style = {{margin: '0px 10px 0px 0px'}} type="checkbox" />
                <label style={{height: '17px'}}>Запомнить</label>
            </div>
            <button onClick = {(event) => {login(event)}}  className="Log__Button">Войти</button>
        </div>
                
    ) 
}

export default LogForm