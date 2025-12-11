import { BrowserRouter } from 'react-router-dom'
import './App.css'
import ProductCard from './components/productCard'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/homePage'
import LoginPage from './pages/login/login.jsx'
import { Toaster } from 'react-hot-toast'
import AdminPage from './pages/admin/adminPage.jsx'
import RegesterUser from './pages/regester/regester.jsx'

function App() {

  <></>
  return (

    <BrowserRouter>
      <Toaster position='top-right'/>
        <Routes path = "/">
          <Route path = "/regester" element = {<RegesterUser/>}></Route>
          <Route path = "/login" element = { <LoginPage /> }></Route>
          <Route path = "/admin/*" element = { <AdminPage/>}></Route>
          <Route path = "/product/*" element ={<ProductCard name="JBL go speaker" price="24500" description="This is a high quality bluetooth speaker" image ="https://imgs.search.brave.com/WSjYk925-bqm37yyRTC3KL4P0KfKLn_SuP-AeHaRQZg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDk2Mzg3NjctMGNj/ZjZjYjEyODFiP2Zt/PWpwZyZxPTYwJnc9/MzAwMCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE5IeDhhbUpzZkdW/dWZEQjhmREI4Zkh3/dw"/>}/>
          <Route path = "/*" element ={<HomePage/>}/>         
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
