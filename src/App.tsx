import { Outlet } from "react-router-dom";
import Header from "./section/Header";
import Footer from "./section/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
