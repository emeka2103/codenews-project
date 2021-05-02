import React, { useEffect } from "react";

import Header from "../Components/Header";
import Nav from "../Components/Nav";
import NewsCard from "../Components/NewsCard";

const Search = () => {
  const [searching, setSearching] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [text, setText] = React.useState("");

  function handleSearch() {
    setSearching(true);
    fetch(
      "https://newsapi.org/v2/everything?q=" +
        text +
        "&apiKey=3feb67eae5534820adc4f9e8206b26e4"
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setSearching(false);
      });
  }

  function handleInputValue(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Header page="Search" />
      <Nav />
      <div className="searchPage">
        <form onSubmit={handleSubmit} className="searchData">
          <input onChange={handleInputValue} type="text" value={text} />
          <button onClick={handleSearch} type="submit">
            <span>Search</span>
          </button>
        </form>
      </div>
      <div className="newsGallery">
        {searching ? (
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

export default Search;
