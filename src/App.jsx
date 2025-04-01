import { useState, useEffect } from "react";
import "./App.css";
import {
  Home,
  SingleChat,
  Services,
  BeautyShop,
  LoginPage,
  RegisterPage,
} from "./pages";

import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import PrivateRoutes from "./components/PrivateRoutes";
import { Card } from "./components/index";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const here = [[...new Set(products.map((Val) => Val.category))]];

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ id, image_link, title, name, price, price_sign }) => (
        <Card
          key={id}
          image_link={image_link}
          name={name}
          price={price}
          price_sign={price_sign}
          selectedCategory={selectedCategory}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/services" element={<Services />} />
          <Route
            path="/stylist/:staffId"
            element={<SingleChat products={products} />}
          />
        </Route>

        <Route
          path="/beautyshop"
          element={
            <BeautyShop
              products={products}
              result={result}
              handleClick={handleClick}
              selectedCategory={selectedCategory}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

// https://www.figma.com/design/vrMDFU09pjZlQfeEErpuGb/Beauty-Salon-Figma-Template-(Community)?node-id=1-68&node-type=frame&t=MvW5xUbfRBGqq3G6-0
