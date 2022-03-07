import { DatePicker } from "antd";
import Head from "next/head";
import Image from "next/image";
import MainHeader from "../components/MainHeader";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col p-0">
      <MainHeader />
      <SearchBar />
    </div>
  );
}
