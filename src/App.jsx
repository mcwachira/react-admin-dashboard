import './App.css'
import { Routes, Route } from 'react-router-dom'
import Topbar from "./components/TopBar/Topbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'

function App() {


  return (
    <>

      <Topbar />
      <div className="container">
        <Sidebar />

        <div className="others">

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/users/:userId' element={<User />} />
            <Route path='/newuser' element={<NewUser />} />

          </Routes>

        </div>
      </div>



    </>


  )
}

export default App
