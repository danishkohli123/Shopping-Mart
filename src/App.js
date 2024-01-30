import Main from "./Components/main";
import Shop from "./Components/shop";
import SingleProductInfo from "./Components/singleProductInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="singleProductInfo" element={<SingleProductInfo />} />
          <Route path="shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
