import { useSelector } from "react-redux";
import noImage from "../../assets/no_image.jpeg";
import { setStatusLoading } from "../../redux/TopHeadlines/TopHeadlinesSlice";
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
  const openUrl = (url: string) => {
    window.open(url);
  };
  return (
    <>
  {" "}
      {loading === "loading" ? (
        <Loader />
      ) : (
        <ContentInfo data={data} noImage={noImage} openUrl={openUrl} />
      )} 
       {/* <ContentInfo data={data} noImage={noImage} openUrl={openUrl} /> */}
    </>
  );
};

export default Content;
