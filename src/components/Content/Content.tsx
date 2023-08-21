import { useSelector } from "react-redux";
import noImage from "../../assets/no_image.jpeg";
import { setBurgerStatus, setStatusLoading } from "../../redux/TopHeadlines/TopHeadlinesSlice";
import Loader from "../Loader/Loader";
import ContentInfo from "./ContentInfo";

type ContentType = {
  data: {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
      id: null | string;
      name: null | string;
    };
    title: string;
    url: string;
    urlToImage: string;
  }[];
};

const Content: React.FC<ContentType> = ({ data }) => {
  const loading = useSelector(setStatusLoading);
  const burgerStatus = useSelector(setBurgerStatus)
  const openUrl = (url: string) => {
    window.open(url);
  };
  return (
    <>
      {" "}
      {loading === "loading" ? (
        <Loader />
      ) : (
        <ContentInfo burgerStatus={burgerStatus} data={data} noImage={noImage} openUrl={openUrl} />
      )}
    </>
  );
};

export default Content;
