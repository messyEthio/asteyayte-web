import style from "../mobile-style.module.css";
const MobileViewHeader = ({ component: Component, ...rest }) => {
  return (
    <div className="shadow-md fixed w-full">
      <div className={style.appBar}>
        <Component {...rest} />
      </div>
    </div>
  );
};

export default MobileViewHeader;
