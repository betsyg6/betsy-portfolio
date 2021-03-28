import React from 'react';
import { ArticleStyled } from './styles';
import { parseDate } from '../components/Articles/copy';

const ArticleCard = ({ article }) => {
  return (
    <a href={article.link} key={article.link} title={article.title}>
      <ArticleStyled>
        <span>{article.categories[4]}</span>
        <h4>{article.title}</h4>
        <span>{parseDate(article.pubDate)}</span>
      </ArticleStyled>
    </a>
  );
};

export default ArticleCard;
