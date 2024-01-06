import "./App.css";
import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout/Layout";
import pages from "./utils/pages"
import Home from "./pages/Home/Home"
import About from "./pages/Sections/About/About";
import Menu from "./pages/Menu/Menu";
import Reservations from "./pages/Reservations/Reservations";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <div data-testid="app-component">
      <Layout>
        <Routes>
          <Route path={pages.get("home").path} element={<Home />} />
          <Route path={pages.get("about").path} element={<About />} />
          <Route path={pages.get("menu").path} element={<Menu />} />
          <Route
            path={pages.get("reservations").path}
            element={<Reservations />}
          />
          <Route path={pages.get("orders").path} element={<Orders />} />
          <Route path={pages.get("login").path} element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App