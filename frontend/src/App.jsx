
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './layouts/header/Header'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {

  return (
    <>
    <div className='app_container'>

      <Sidebar/>
      <div className='app_content'>

          <Header/>
          <Dashboard/>

      </div>

    </div>

    </>
  )
}

export default App
