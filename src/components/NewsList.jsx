import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import Newsitem from "./Newsitem";
function NewsList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?q=apple&from=2022-05-27&to=2022-05-27&sortBy=popularity&apiKey=54b45f51b31b414f80e3e2d0395311c8"
      );
        setArticles(res.data.articles);
      console.log(res);
    };
    getArticles();
  },[]);

  return <div>
      {articles.map(({title, description , url, urlToImage}) => (
         <Newsitem  title={title} description={description} url={url} urlToImage={urlToImage}/>
      ))}
  </div>;
}

export default NewsList;
