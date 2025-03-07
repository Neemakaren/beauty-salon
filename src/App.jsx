import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleChat from './pages/SingleChat'
import { Footer, Navbar } from './components'
import SharedLayout from './components/SharedLayout'

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const menuItems = ["all", ...new Set(items && items.map((Val) => Val.category))];

  
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/services"
              element={<Services items={items} menuItems={menuItems} />}
            />
            <Route
              path="/stylist/:staffId"
              element={<SingleChat items={items} />}
            />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App


// https://www.figma.com/design/vrMDFU09pjZlQfeEErpuGb/Beauty-Salon-Figma-Template-(Community)?node-id=1-68&node-type=frame&t=MvW5xUbfRBGqq3G6-0

