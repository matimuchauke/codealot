import {
  HomeContainer,
  HelpContainer,
  SingleProductContainer,
  LoginContainer,
  CartContainer,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainHeader, CovidBanner, Footer, ScrollToTop } from "./components";

function App() {
  return (
    <div className="text-gray-700">
      <BrowserRouter>
        <ScrollToTop />
        <CovidBanner />
        <MainHeader />
        <Routes>
          <Route exact path="/" element={<HomeContainer />}></Route>
          <Route exact path="/help" element={<HelpContainer />}></Route>
          <Route exact path="/login" element={<LoginContainer />}></Route>
          <Route exact path="/cart" element={<CartContainer />}></Route>
          <Route
            exact
            path="/product/:productId"
            element={<SingleProductContainer />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
