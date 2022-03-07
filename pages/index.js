import AppBar from "../components/AppBar";
import MainHeader from "../components/MainHeader";

export default function Home() {
  return (
    <div className="flex flex-col p-0">
      <MainHeader />
      <AppBar />
    </div>
  );
}
