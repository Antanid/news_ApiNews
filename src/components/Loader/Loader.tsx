import style from "./style/style.module.scss";
import PuffLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className={style.loader}>
      <PuffLoader color="#505453" />
    </div>
  );
};

export default Loader;
