import "./App.less";
import "antd/dist/antd.less";
import MobileLanding from "./mobile/mobile-landing";
import DesktopLanding from "./desktop/desktop-landing";
import { useState, useEffect } from "react";
import SearchBar from "./mobile/component/search-bar";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return width < breakpoint ? <MobileLanding /> : <SearchBar />;
}

export default App;
