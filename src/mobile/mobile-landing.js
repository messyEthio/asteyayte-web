import { BrowserRouter, Switch, Route } from "react-router-dom";
import MobileHomePage from "./component/mobile-home-page";
const MobileLanding = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={MobileHomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default MobileLanding;
