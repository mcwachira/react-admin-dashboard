import './App.css'

import Topbar from "./components/TopBar/Topbar"
import Sidebar from "./components/Sidebar/Sidebar"
function App() {


  return (
    <>

      <Topbar />
      <div className="container">
        <Sidebar />

        <div className="others">
          Others
        </div>
      </div>



    </>


  )
}

export default App
