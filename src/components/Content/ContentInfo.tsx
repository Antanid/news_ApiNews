import { Fade } from "react-awesome-reveal";
import style from "./style/style.module.scss";

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
  noImage: string;
  openUrl: (url: string) => void;
  burgerStatus: boolean;
};

const ContentInfo: React.FC<ContentType> = ({ data, noImage, openUrl, burgerStatus }) => {
  return (
    <Fade>
      <div className={burgerStatus ? style.content_none : style.content_box}>
        {data.map((i) => (
          <div key={i.title} className={style.content_item} onClick={() => openUrl(i.url)}>
            <img
              className={style.content_img}
              src={i.urlToImage ? i.urlToImage : noImage}
              alt="newsImg"
            />
            <h4 className={style.content_text_data}>{i.publishedAt.split("T")[0]}</h4>
            <h3 className={style.content_text}>{i.title}</h3>
          </div>
        ))}
      </div>
    </Fade>
  );
};

export default ContentInfo;
