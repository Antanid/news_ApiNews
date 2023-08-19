import { useSelector } from "react-redux";
import { setTopHeadlines } from "../../redux/TopHeadlines/TopHeadlinesSlice";
import Content from "../Content/Content";


const TopHeadlines = () => {
  const data = useSelector(setTopHeadlines)
  return (
    <div>
      <Content data={data}/>
    </div>
  );
};

export default TopHeadlines;
