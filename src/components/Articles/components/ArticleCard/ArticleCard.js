import React from 'react';
import { Article } from './styles';
import { parseDate } from '../../copy';

const ArticleCard = ({ article }) => {
  return (
    <a href={article.link} key={article.link} title={article.title}>
      <Article>
        <span>{article.categories[4]}</span>
        <h4>{article.title}</h4>
        <span>{parseDate(article.pubDate)}</span>
      </Article>
    </a>
  );
};

export default ArticleCard;
