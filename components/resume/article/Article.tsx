import { FC } from 'react';
import { Tags } from './Tags';
import { Date } from './Date';
import { Description } from './Description';
import { Link } from './Link';

import style from './article.module.css';
import { ArticleType } from '@Types';

export const Article: FC<ArticleType> = ({ data, positionLeft, cssClass }) => {
  const row = ['languages', 'interests'].includes(cssClass);

  return (
    <article
      className={`${row ? style.module_row : style.module_column} ${positionLeft ? style.card : ''} ${
        cssClass === 'languages' ? style.module_lang : ''
      }`}
    >
      {data.title && <h2 className={style.title}>{data.title}</h2>}

      {data.date && <Date date={data.date} />}
      {data.description && <Description desc={data.description} cssClass={cssClass} />}

      {data.tags && <Tags tags={data.tags} />}

      {data.link && <Link url={data.link} />}
    </article>
  );
};
