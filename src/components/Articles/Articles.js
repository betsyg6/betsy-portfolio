import React, { useState, useEffect } from 'react';
import { HalfWrapper, ArticleCard } from '../../ui-components';
import { mediumRssFeed, shownArticles } from './copy';
import { StyledList } from './styles';

const Articles = () => {
  const MAX_ARTICLES = shownArticles;
  const [articles, setArticles] = useState();

  useEffect(() => {
    const loadArticles = async () => {
      // MediumRssFeed is set in config.js
      fetch(mediumRssFeed, { headers: { Accept: 'application/json' } })
        .then((res) => res.json())
        // Feed also contains comments, therefore we filter for articles only
        .then((data) => data.items.filter((item) => item.categories.length > 0))
        .then((newArticles) => newArticles.slice(0, MAX_ARTICLES))
        .then((articles) => setArticles(articles))
        .catch((error) => console.log(error));
    };
    loadArticles();
  }, [MAX_ARTICLES]);

  return (
    <div id="articles">
      <HalfWrapper>
        <h1>Articles</h1>
        <StyledList>
          {articles &&
            articles.map((article) => {
              return <ArticleCard key={article.link} article={article} />;
            })}
        </StyledList>
      </HalfWrapper>
    </div>
  );
};

export default Articles;
