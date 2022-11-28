import React, { useContext , useState , useEffect   } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/HeaderLogo.png';
import { AuthContext } from '../context/index';
import '../style/header.css';

const Header = ({sign, log, back,setBack,name,lname}) => {
    const Click = true;
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [isActive1, setIsActive1] = useState(true)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    useEffect(()=>{
        if(localStorage.getItem('Main')){
            setIsActive3(false)
            setIsActive1(true)
            setIsActive2(false)
        }   
        if(localStorage.getItem('Favorite')){
            setIsActive3(false)
            setIsActive1(false)
            setIsActive2(true)
        }
        if(localStorage.getItem('About')){
            setIsActive3(true)
            setIsActive1(false)
            setIsActive2(false)
        }
      })
    const loginame = localStorage.getItem('User')
    const lastname = localStorage.getItem('LUser')

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    
    const NavMain = () => 
    {
        setIsActive3(false)
        setIsActive1(true)
        setIsActive2(false)
        localStorage.setItem('Main', 'true')
        localStorage.removeItem('Favorite')
        localStorage.removeItem('About')
    }
    const NavFavorites = () => 
    {
        setIsActive3(false)
        setIsActive1(false)
        setIsActive2(true)
        localStorage.setItem('Favorite','true')
        localStorage.removeItem('Main')
        localStorage.removeItem('About')
    }
    const NavAbout = () => 
    {
        setIsActive3(true)
        setIsActive1(false)
        setIsActive2(false)
        localStorage.removeItem('Favorite')
        localStorage.removeItem('Main')
        localStorage.setItem('About','true')
    }
    return (
        <header className="header">
            <div style={{display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>
                <img src={logo} alt="" style={{marginRight: '90px'}}/>
                <ul className="header__nav">
                    <Link to='/MainPage' id = "N1" onClick = {() => NavMain()} className= {`NavMain ${(isActive1 || back) ? 'active' : ''}`}>Главнaя</Link>
                    {
                        isAuth
                        ?
                        <Link to='/Favorite' id = "N1" onClick = {() => {NavFavorites();setBack(false)}} className= {`NoNavFavorites ${(isActive2 && !back) ? 'active' : ''}`}>Избранное</Link>
                        :
                        <Link id = "N1" className='NavFavorites'>Избранное</Link>
                    }
                    <Link to = '/About' id = "N1" onClick = {() => {NavAbout();setBack(false)}} className= {`NavAbout ${(isActive3 && !back) ? 'active' : ''}`} >О проекте</Link>
                </ul>
            </div>
            {isAuth 
                ?
                <div className='Registration'>
                    <div style={{marginRight:'23.43px'}}>{loginame + ' ' + lastname[0] + '.'}</div>
                    <button onClick={()=> logout()} className='LogOutButton'>Выйти</button>
                </div>
                :
                <div style={{width: '351px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <button className='SignButton' onClick = {() => sign(Click)}>Регистрация</button>
                    <button className='LogButton' onClick = {() => log(Click)}>Войти</button>
                </div>
            }   
        </header>
    )
}

export default Header;