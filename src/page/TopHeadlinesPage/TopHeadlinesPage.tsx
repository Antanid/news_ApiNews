import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import TopHeadlines from "../../components/TopHeadlines/TopHeadlines";
import { fetchTopHeadlines } from "../../redux/TopHeadlines/asyncTopHeadlines";

const TopHeadlinesPage = () => {
  const { i18n } = useTranslation();
  const location = window.location.pathname.replace("/", "");
  const language = i18n.language;
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore: Unreachable code error
    dispatch(fetchTopHeadlines({ language, location }));
  }, [language, dispatch, location]);
  return (
    <div>
      <TopHeadlines />
    </div>
  );
};

export default TopHeadlinesPage;
