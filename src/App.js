
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Gold from './components/Gold/Gold'
import Forex from './components/Forex/Forex'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Gold/>
      {/* <Forex/> */}
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
