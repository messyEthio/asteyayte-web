import { Icon } from "@iconify/react";
import { Button } from "antd";
import Link from "next/link";
import Banner from "../components/banners/Banner";
import AppBar from "../components/headers/AppBar";
import MainHeader from "../components/MainHeader";
import style from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className="p-0 h-screen">
      <div className="flex flex-col">
        <MainHeader />
        <AppBar type={"home"} component={null} />
        <Banner />
      </div>

      <Button
        size="large"
        type="primary"
        shape="circle"
        className={style.floatingBtn}
      >
        <Link href={"/post-comment"}>
          <Icon icon="bx:comment-add" fontSize={30} />
        </Link>
      </Button>
    </div>
  );
}
