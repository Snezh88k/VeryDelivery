import React from "react";

import "./App.css";
import Catalog from "./Components/Catalog/Catalog";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import NameCategory from "./Components/Filter/Filter";

function App() {
  return (
    <div className="App">
      <div className="mainGrid">
        <div className="header">
          <img className="logo" src="images/logo.png" alt="Логотип" />

          <Cart />
        </div>
        <div className="status">
          <div style={{ fontWeight: "700" }}>Доставка</div>
          <div>40-50 минут</div>
          <div style={{ fontWeight: "600" }}>Работа сервиса</div> {"45р"}
        </div>
        <div className="list">
          <Catalog />
        </div>
        <div className="product">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;
