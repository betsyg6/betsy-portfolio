import React from 'react'
import { Article } from './styles'
import { parseDate } from '../../copy'

const ArticleCard = ({ article }) => {
  const { link, title, categories, pubDate } = article
  const category = categories[4]
  return (
    <a href={link} key={link} title={title}>
      <Article>
        <span>{category}</span>
        <h4>{title}</h4>
        <span>{parseDate(pubDate)}</span>
      </Article>
    </a>
  )
}

export default ArticleCard
