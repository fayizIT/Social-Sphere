import { BrowserRouter,Navigate, Routes, Route } from "react-router-dom";
import HomePages from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";



function App() {

  
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<HomePages/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/profile/:userId" element={<ProfilePage/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
