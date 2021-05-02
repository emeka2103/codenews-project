import React, { useEffect } from "react";

import Header from "../Components/Header";
import Nav from "../Components/Nav";
import NewsCard from "../Components/NewsCard";

const TopHeadlines = () => {
  const [fetching, setFetching] = React.useState(false);
  const [articles, setArticles] = React.useState([]);

  useEffect(() => {
    setFetching(true);
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=3feb67eae5534820adc4f9e8206b26e4"
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setFetching(false);
      });
  }, []);

  console.log("articles", articles);
  console.log("fetching", fetching);

  return (
    <>
      <Header page="Top Headlines" />
      <Nav />
      <div className="newsGallery">
        {fetching ? (
          <>
            <div className="newsPlaceholder"></div>
            <div className="newsPlaceholder"></div>
            <div className="newsPlaceholder"></div>
            <div className="newsPlaceholder"></div>
            <div className="newsPlaceholder"></div>
            <div className="newsPlaceholder"></div>
          </>
        ) : (
          articles.map((newsItem) => (
            <NewsCard
              image={newsItem.urlToImage}
              title={newsItem.title}
              description={newsItem.description}
              date={new Date(newsItem.publishedAt).toDateString()}
              author={newsItem.author}
              url={newsItem.url}
            />
          ))
        )}
      </div>
    </>
  );
};

export default TopHeadlines;

//3feb67eae5534820adc4f9e8206b26e4
