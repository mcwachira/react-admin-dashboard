import './App.css'

import Topbar from "./components/TopBar/Topbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Home from './pages/home/Home'
function App() {


  return (
    <>

      <Topbar />
      <div className="container">
        <Sidebar />

        <div className="others">
          <Home />
        </div>
      </div>



    </>


  )
}

export default App
