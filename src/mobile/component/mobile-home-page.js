import { Button } from "antd";
import MobileViewHeader from "./mobile-view-header";
import SearchBar from "./search-bar";
import style from "../mobile-style.module.css";
import BannerPage from "./banner/banner-page";
const MobileHomePage = () => {
  return (
    <div className="p-0 h-screen">
      <div className="flex flex-col">
        <MobileViewHeader component={SearchBar} />
        <BannerPage />
      </div>

      {/**Floating button */}
      <Button size="large" type="primary" className={style.floatingBtn}>
        Write comment
      </Button>
    </div>
  );
};

export default MobileHomePage;
