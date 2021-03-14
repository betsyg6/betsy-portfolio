import React from 'react';
import { ArticleStyled } from './styles';
import { parseDate } from '../components/Articles/copy';

const ArticleCard = ({ article }) => {
  return (
    <ArticleStyled>
      <a href={article.link} key={article.link} title={article.title}>
        <span>{article.categories[4]}</span>
        <h4>{article.title}</h4>
        <span>{parseDate(article.pubDate)}</span>
      </a>
    </ArticleStyled>
  );
};

export default ArticleCard;
