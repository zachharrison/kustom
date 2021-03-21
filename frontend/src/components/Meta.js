import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' keywords={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Kustom | Welcome',
  description: 'We sell only the highest quality apparel',
  keywords: 'clothing, buy clothing, apparel',
};

export default Meta;
