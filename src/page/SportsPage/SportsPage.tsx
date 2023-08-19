import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Content from "../../components/Content/Content";
import { fetchTopHeadlines } from "../../redux/TopHeadlines/asyncTopHeadlines";
import { setTopHeadlines } from "../../redux/TopHeadlines/TopHeadlinesSlice";

const SportsPage = () => {
  const { i18n } = useTranslation();
  const location = window.location.pathname.replace("/", "");
  const language = i18n.language;
  const dispatch = useDispatch();
  const data = useSelector(setTopHeadlines);
  useEffect(() => {
    // @ts-ignore: Unreachable code error
    dispatch(fetchTopHeadlines({ language, location }));
  }, [language, dispatch, location]);
  return (
    <div>
      <Content data={data}/> 
    </div>
  )
}

export default SportsPage