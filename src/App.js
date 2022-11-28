import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import MyModal from './components/ui/MyModal/MyModal';
import { AuthContext } from './context/index';
import MainPage from './pages/MainPage'
import SingForm from './components/SingForm';
import LogForm from './components/LogForm';
import {ModalVisible} from './context/index1'
import {Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Characters from './pages/Characters';
import Location from './pages/Location';
import Episodes from './pages/Episodes';
import Favorite from './pages/Favorite';

function App() {
  const [modal, setModal] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [isAuth,setIsAuth] = useState(false)
  const [back,setBack] = useState(false)
  const [favorites,setFavorites] = useState([

  ]);
  const [flocals,setFlocals] = useState([

  ]);
  const [users,setUsers] = useState([

  ]);
  const [name,setName] = useState('')
  const [lname,setLName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
    if(users.length >= 1 )
    {
      localStorage.setItem('persons',JSON.stringify(users))
    }

  })

  const RemoveFavoritePost = (favorite) => 
    {
      setFavorites(favorites.filter(f => f.id !== favorite.id))
    }

    const RemoveFavoriteLocal = (flocal) => 
    {
      setFlocals(flocals.filter(f => f.id !== flocal.id))
    }
  
  const AddPost = (NewPost) => 
  {
    favorites.push(NewPost)
  }
  const AddLocal = (NewPost) => 
  {
    flocals.push(NewPost)
  }

  const GetName = (name) => 
  {
    setName(name)
    localStorage.setItem('User',name)
  }
  const GetLName = (name) => 
  {
    setLName(name)
    localStorage.setItem('LUser',name)
  }
  const visibleSign = (Click) => 
  {
    setModal(Click)
  }
  const UserStor = (NewUser) => 
  {
    users.push(NewUser)
    setEmail(NewUser.email)
    setPassword(NewUser.password)
  }

  const visibleLog = (Click) => 
  {
    setModal1(Click)
  }
  const OnChange = () => 
  {
    setBack(true)
  }
  return (
  <div className="App">
    <AuthContext.Provider value = {{
        isAuth,
        setIsAuth,
    }}>
      <Header 
      sign={visibleSign} 
      log={visibleLog}
      back={back}
      setBack={setBack}
      name={name}
      lname={lname}
      />
      <ModalVisible.Provider value = {{
        modal,
        modal1,
        setModal,
        setModal1,
      }}>
        <MyModal visible={modal} setVisible={setModal}>
          <SingForm UserStor={UserStor} GetUserName = {GetName} GetUserLName = {GetLName}></SingForm>
        </MyModal>
        <MyModal visible={modal1} setVisible={setModal1}>
          <LogForm Remail={email} Rpassword={password}></LogForm>
        </MyModal>
      </ModalVisible.Provider>
      <Routes>
        <Route exact path = "/MainPage" element={<MainPage/>}>
        </Route>
        <Route path = "/MainPage/1" exact element={<Characters AddFavoritePosts= {AddPost}/>}>
        </Route>
        <Route path = "/MainPage/2" exact element={<Location AddFavoriteLocal = {AddLocal} />}>
        </Route>
        <Route path = "/MainPage/3" exact element={<Episodes/>}>
        </Route> 
        <Route path = "/About" element={<About ChangeBack={OnChange}/>}>
        </Route>
        <Route path = "/Favorite" element={<Favorite ChangeBack={OnChange} removeFavoriteLocal={RemoveFavoriteLocal}remove ={RemoveFavoritePost} flocals={flocals} favorites={favorites}/>}>
        </Route>
      </Routes>
    </AuthContext.Provider>
  </div>
  );
}

export default App;
