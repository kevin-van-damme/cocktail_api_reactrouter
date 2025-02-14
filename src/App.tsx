import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Cocktails from "./pages/Cocktail";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinks" element={<Cocktails />} />
          <Route path="/cocktails/:id/:slugit" element={<Detail />} />
          {/* <Route path="/products/:id/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      </Layout>
    </>
  );
};
export default App;
