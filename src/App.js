import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
 
  Route,
  
 
} from "react-router-dom";
import axios from "axios";
import './App.scss'
import Featured from './components/Feautured/Featured'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import SignUp from './components/Signup/SignUp'
import Coins from './components/Coins/Coins'
import CoinDetail from './components/Coins/CoinDetail'





export default function App() {
  const [data, setData] = useState(null)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

  useEffect(() => {
      axios.get(url).then((response) => {
          setData(response.data)
      }).catch((error) => {
          console.log(error)
      })
  }, [])

  return (
     <div className="body-2">
      <Router>
        <Switch>
        <Route exact path='/'>
            <Navbar />
            <Hero />
            <SignUp/>
            <Footer />
          </Route>
          <Route exact path='/featured'>
            <Navbar/>
            <Featured data={data}/>
            <Coins/>
            <Footer />
          </Route>
          <Route exact path='/login'>
            <Navbar/>
            <Login/>
            <Footer />
          </Route>
          <Route exact path='/singlecoin'>
            <CoinDetail data={data}/>
          </Route>
        </Switch>
      </Router>
      </div>
  )
}
