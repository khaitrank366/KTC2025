import "./App.css";
import Counter02 from './components/Counter02'
import TitleUpdater from "./components/TitleUpdater";
function App() {
  return (
    <>
      {/* <Counter01 /> */}
      {/* <Counter02 /> */}
      <TitleUpdater/>
      {/* <MyShop/> */}
      {/* <MyShop3/> */}

      {/* <BrowserRouter>
        <ul className="border">
          <li className="border">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="border">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="border">
            <Link to="/product">Product</Link>
            <ul>
              <li className="border">
                <Link to="/product/women">Women</Link>
              </li>
              <li className="border">
                <Link to="/product/men">Men</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <AppRoutes01 />
        <AppRoutes02 />
      </BrowserRouter> */}
    </>
  );
}

export default App;
